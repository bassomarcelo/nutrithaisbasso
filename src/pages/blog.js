import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import CtaBanner from "../components/common/CtaBanner";
import Layout from "../components/common/Layout";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";

const POSTS = [
    {
        title: "Por que dietas restritivas não duram",
        excerpt:
            "Restringir demais não é sinal de disciplina. É um caminho que costuma terminar em culpa e recomeço. Entenda o que muda quando o plano respeita a sua vida.",
        to: "/blog/dietas-restritivas-nao-duram",
        category: "Comportamento alimentar",
        image: "eating-cupcakes",
    },
    {
        title: "Fome emocional não é falta de força de vontade",
        excerpt:
            "A comida também acolhe, celebra e acalma. O problema não é sentir fome emocional, mas não ter outras ferramentas para lidar com o que se sente.",
        to: "/blog/fome-emocional",
        category: "Nutrição e emoções",
        image: "in-the-park",
    },
    {
        title: "Como criar hábitos que caibam na sua rotina",
        excerpt:
            "Hábitos que duram não nascem de metas enormes. Nascem de decisões pequenas, repetidas no meio de uma vida real, cheia de imprevistos.",
        to: "/blog/habitos-possiveis",
        category: "Hábitos e rotina",
        image: "in-the-kitchen",
    },
];

export default function Blog() {
    const data = useStaticQuery(graphql`
        query BlogIndexImages {
            images: allFile(filter: { relativePath: { regex: "/advantages/" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 86)
                        }
                    }
                }
            }
        }
    `);

    const images = {};
    data.images.edges.forEach(({ node }) => {
        images[node.name] = getImage(node.childImageSharp.gatsbyImageData);
    });

    return (
        <Layout>
            <PageHero
                eyebrow="Conteúdo gratuito"
                title="Blog"
                intro="Informação clara e sem terrorismo nutricional para você entender melhor a sua relação com a comida, o seu corpo e a sua rotina."
            >
                <a className="tb-btn tb-btn--primary" href="#artigos">
                    Ver artigos
                    <i className="fas fa-arrow-down" aria-hidden="true" />
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/acompanhamento-nutricional">
                    Conhecer o acompanhamento
                </Link>
            </PageHero>

            <section className="tb-section" id="artigos">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Leituras</span>
                        <h2>Comece por aqui</h2>
                        <p>Textos curtos e diretos para levar clareza ao seu dia a dia — e ajudar você a tomar decisões com mais consciência.</p>
                    </Reveal>

                    <div className="tb-grid tb-grid--3">
                        {POSTS.map((post, index) => {
                            const image = images[post.image];
                            return (
                                <Reveal key={post.to} delay={index * 80}>
                                    <article className="tb-card tb-post-card">
                                        <div className="tb-post-card__media">
                                            <span className="tb-post-card__category">{post.category}</span>
                                            {image && <GatsbyImage image={image} alt="" />}
                                        </div>
                                        <div className="tb-post-card__body">
                                            <h3>{post.title}</h3>
                                            <p>{post.excerpt}</p>
                                            <Link className="tb-post-card__link" to={post.to}>
                                                Ler artigo
                                                <i className="fas fa-arrow-right" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </article>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CtaBanner
                eyebrow="Informação é o começo"
                title="Precisa de um caminho individual?"
                text="Cada história pede uma estratégia diferente. No acompanhamento, olhamos para a sua rotina e construímos um plano possível."
            >
                <Link className="tb-btn tb-btn--green" to="/acompanhamento-nutricional">
                    Conhecer o acompanhamento
                </Link>
                <Link className="tb-btn tb-btn--ghost" to="/contato">
                    Falar com a Thaís
                </Link>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/blog"
        title="Blog | Thaís Basso Nutricionista"
        description="Artigos sobre nutrição comportamental, fome emocional, hábitos e relação com a comida, por Thaís Basso, nutricionista funcional e comportamental."
    />
);
