// Busca as avaliações reais do Google (Places API) em tempo de build.
// Configure GOOGLE_PLACES_API_KEY (e opcionalmente GOOGLE_PLACE_ID) no .env.production.
// Sem chave ou em caso de erro na API, o site cai para os depoimentos de src/content/site.js.

const { createRemoteFileNode } = require("gatsby-source-filesystem");

const PLACE_SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const PLACE_DETAILS_URL = (placeId) => `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`;
const PLACE_QUERY = "Thaís Basso Nutricionista Funcional e Comportamental Carlos Barbosa";
const PLACE_FALLBACK_CENTER = { latitude: -29.2939923, longitude: -51.4963869 };

async function fetchJson(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }
    return response.json();
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
        type GoogleReview implements Node {
            name: String
            text: String
            rating: Float
            relativeTime: String
            avatar: File @link
        }
        type GoogleReviewsMeta implements Node {
            rating: Float
            userRatingCount: Int
            placeId: String
        }
    `);
};

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, cache, getCache, reporter }) => {
    const { createNode } = actions;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
        reporter.info("GOOGLE_PLACES_API_KEY não configurada - usando depoimentos estáticos.");
        return;
    }

    try {
        // Resolve o place id uma vez e guarda em cache entre builds.
        let placeId = process.env.GOOGLE_PLACE_ID || (await cache.get("google-place-id"));

        if (!placeId) {
            const search = await fetchJson(PLACE_SEARCH_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": apiKey,
                    "X-Goog-FieldMask": "places.id",
                },
                body: JSON.stringify({
                    textQuery: PLACE_QUERY,
                    locationBias: { circle: { center: PLACE_FALLBACK_CENTER, radius: 5000 } },
                    languageCode: "pt-BR",
                }),
            });
            placeId = search.places?.[0]?.id;
            if (!placeId) throw new Error("Place não encontrado na busca do Places API.");
            await cache.set("google-place-id", placeId);
        }

        const place = await fetchJson(PLACE_DETAILS_URL(placeId), {
            headers: {
                "X-Goog-Api-Key": apiKey,
                "X-Goog-FieldMask": "rating,userRatingCount,reviews",
            },
        });

        const reviews = (place.reviews || []).filter((review) => review.text?.text || review.originalText?.text);

        for (const review of reviews) {
            const author = review.authorAttribution || {};

            // Foto do perfil do autor, baixada no build (as URLs do Google expiram).
            let avatarField = {};
            if (author.photoUri) {
                try {
                    const fileNode = await createRemoteFileNode({
                        url: author.photoUri,
                        createNode,
                        createNodeId,
                        cache: getCache("gatsby-source-filesystem"),
                        reporter,
                    });
                    avatarField = { avatar___NODE: fileNode.id };
                } catch (error) {
                    reporter.warn(`Não foi possível baixar a foto de ${author.displayName}: ${error.message}`);
                }
            }

            createNode({
                name: author.displayName || "Cliente",
                text: (review.originalText?.text || review.text?.text || "").trim(),
                rating: review.rating ?? null,
                relativeTime: review.relativePublishTimeDescription || null,
                ...avatarField,
                id: createNodeId(`google-review-${review.name}`),
                parent: null,
                children: [],
                internal: {
                    type: "GoogleReview",
                    contentDigest: createContentDigest(review),
                },
            });
        }

        createNode({
            rating: place.rating ?? null,
            userRatingCount: place.userRatingCount ?? null,
            placeId,
            id: createNodeId("google-reviews-meta"),
            parent: null,
            children: [],
            internal: {
                type: "GoogleReviewsMeta",
                contentDigest: createContentDigest({ rating: place.rating, userRatingCount: place.userRatingCount }),
            },
        });

        reporter.info(`Avaliações do Google sincronizadas: ${reviews.length} reviews (nota ${place.rating}).`);
    } catch (error) {
        reporter.warn(`Falha ao buscar avaliações do Google, usando depoimentos estáticos: ${error.message}`);
    }
};