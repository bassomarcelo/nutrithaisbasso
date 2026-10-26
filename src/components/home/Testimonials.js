import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import { TESTIMONIALS } from "../../content/site";
import Reveal from "../common/Reveal";
import "./Testimonials.css";

const GOOGLE_REVIEWS = "https://www.google.com/maps/place/Tha%C3%ADs+Basso+Nutricionista+Funcional+e+comportamental/@-29.2939876,-51.4989672,17z/data=!4m8!3m7!1s0x951c195e1b1bb64f:0x5e8468a758137428!8m2!3d-29.2939923!4d-51.4963869!9m1!1b1!16s%2Fg%2F11p0_77cs2?hl=pt-BR&entry=ttu";

const renderStars = (rating) =>
    [1, 2, 3, 4, 5].map((step) => (
        <i key={step} className={`fas fa-star ${step <= Math.round(rating) ? "is-filled" : "is-empty"}`} aria-hidden="true" />
    ));

export default function Testimonials() {
    const trackRef = useRef(null);
    const data = useStaticQuery(graphql`
        query HomeTestimonials {
            googleReviews: allGoogleReview(sort: { fields: name }) {
                nodes {
                    name
                    text
                    rating
                    relativeTime
                    avatar {
                        childImageSharp {
                            gatsbyImageData(width: 96, height: 96, placeholder: BLURRED, formats: [AUTO, WEBP])
                        }
                    }
                }
            }
            googleMeta: allGoogleReviewsMeta {
                nodes {
                    rating
                    userRatingCount
                }
            }
        }
    `);

    const googleNodes = data.googleReviews.nodes;
    const meta = data.googleMeta.nodes[0];

    const testimonials = googleNodes.length
        ? googleNodes.map((node) => ({
              key: node.name,
              name: node.name,
              text: node.text,
              rating: node.rating ?? 5,
              avatarImage: node.avatar ? getImage(node.avatar) : null,
              label: node.relativeTime || "Avaliação no Google",
          }))
        : TESTIMONIALS.map((testimonial) => ({
              key: testimonial.name,
              name: testimonial.name,
              text: testimonial.text,
              rating: 5,
              avatarImage: null,
              label: "Paciente",
          }));

    const badgeRating = meta?.rating != null ? meta.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : "5,0";
    const badgeCount = meta?.userRatingCount != null ? meta.userRatingCount : null;

    const scroll = (direction) => {
        const track = trackRef.current;
        if (!track) return;
        const amount = Math.min(track.clientWidth * 0.86, 420);
        track.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    return (
        <section className="tb-testimonials tb-section" id="depoimentos">
            <div className="container-custom">
                <div className="tb-testimonials-head">
                    <Reveal className="tb-section-heading">
                        <span className="tb-eyebrow">Prova social</span>
                        <h2>O que meus pacientes estão dizendo</h2>
                        <p>Histórias reais de quem trocou a dieta do “nunca mais” por uma relação mais leve e possível com a comida.</p>
                    </Reveal>

                    <Reveal className="tb-google-badge" delay={100}>
                        <span className="tb-google-badge-mark" aria-hidden="true">
                            G
                        </span>
                        <span>
                            <strong>{badgeRating}</strong>
                            <span className="tb-google-stars" aria-label="Avaliação no Google">
                                {renderStars(meta?.rating ?? 5)}
                            </span>
                            <small>{badgeCount ? `${badgeCount} avaliações no Google` : "Avaliações no Google"}</small>
                        </span>
                    </Reveal>
                </div>

                <div className="tb-testimonials-viewport">
                    <div className="tb-testimonials-track" ref={trackRef} aria-label="Depoimentos de pacientes">
                        {testimonials.map((testimonial) => {
                            const initials = testimonial.name
                                .split(" ")
                                .slice(0, 2)
                                .map((part) => part.charAt(0))
                                .join("");

                            return (
                                <article className="tb-testimonial-card" key={testimonial.key}>
                                    <i className="fas fa-quote-left tb-testimonial-quote" aria-hidden="true" />
                                    <p className="tb-testimonial-text">{testimonial.text}</p>
                                    <div className="tb-testimonial-footer">
                                        <div className="tb-testimonial-author">
                                            {testimonial.avatarImage ? (
                                                <GatsbyImage image={testimonial.avatarImage} alt={`Foto de ${testimonial.name}`} className="tb-testimonial-avatar" />
                                            ) : (
                                                <span className="tb-testimonial-avatar tb-testimonial-avatar--initials" aria-hidden="true">
                                                    {initials}
                                                </span>
                                            )}
                                            <span>
                                                <strong>{testimonial.name}</strong>
                                                <small>{testimonial.label}</small>
                                                <span className="tb-testimonial-stars" aria-label={`Nota do paciente: ${testimonial.rating} de 5`}>
                                                    {renderStars(testimonial.rating)}
                                                </span>
                                            </span>
                                        </div>
                                        <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer" className="tb-testimonial-link">
                                            Avaliação completa
                                            <i className="fas fa-external-link-alt" aria-hidden="true" />
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className="tb-testimonials-foot">
                    <div className="tb-testimonials-controls">
                        <button type="button" className="tb-testimonials-arrow" onClick={() => scroll(-1)} aria-label="Depoimento anterior">
                            <i className="fas fa-arrow-left" aria-hidden="true" />
                        </button>
                        <button type="button" className="tb-testimonials-arrow" onClick={() => scroll(1)} aria-label="Próximo depoimento">
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                        </button>
                        <span className="tb-testimonials-hint">Arraste para o lado para ver mais</span>
                    </div>
                    <a className="tb-testimonials-all" href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer">
                        Ver mais avaliações no Google
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}