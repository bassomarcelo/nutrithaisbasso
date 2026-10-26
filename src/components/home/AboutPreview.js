import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
import Reveal from "../common/Reveal";
import "./AboutPreview.css";

export default function AboutPreview() {
    const data = useStaticQuery(graphql`
        query HomeAboutImage {
            image: file(relativePath: { eq: "04-2026/IMG_1532.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
        }
    `);

    const image = getImage(data.image.childImageSharp.gatsbyImageData);

    return (
        <section className="tb-about-preview tb-section" id="sobre">
            <div className="container-custom">
                <div className="tb-about-preview-grid">
                    <Reveal className="tb-about-preview-media">
                        <span className="tb-about-preview-shape" aria-hidden="true" />
                        <div className="tb-about-preview-photo">
                            <GatsbyImage image={image} alt="Thaís Basso sorrindo, sentada no consultório" />
                        </div>
                        <div className="tb-about-preview-badge">
                            <strong>CRN-2 16231D</strong>
                            <span>Nutricionista funcional e comportamental</span>
                        </div>
                    </Reveal>

                    <Reveal className="tb-about-preview-copy" delay={120}>
                        <span className="tb-eyebrow">Sobre mim</span>
                        <h2>Nutrição com escuta, ciência e realidade</h2>
                        <p className="tb-lead">
                            Sou a Thaís Basso, nutricionista pós-graduada em nutrição funcional e comportamento alimentar. Há mais de uma década ajudo pessoas a
                            construir uma relação mais leve com a comida — longe do terrorismo nutricional e das dietas que não se sustentam.
                        </p>
                        <p>
                            Meu trabalho integra nutrição, comportamento e estilo de vida. Não olho apenas para o que você come, mas para como vive: sono, rotina,
                            trabalho, relações e emoções. É aí que a mudança acontece de verdade.
                        </p>

                        <ul className="tb-about-preview-list">
                            <li>
                                <i className="fas fa-graduation-cap" aria-hidden="true" />
                                Pós-graduação em Nutrição Funcional e Comportamento Alimentar
                            </li>
                            <li>
                                <i className="fas fa-certificate" aria-hidden="true" />
                                Especialização em Emagrecimento e Saúde
                            </li>
                            <li>
                                <i className="fas fa-heart" aria-hidden="true" />
                                Mais de 2.000 atendimentos no Brasil e no mundo
                            </li>
                        </ul>

                        <Link className="tb-btn tb-btn--primary" to="/sobre">
                            Conheça meu trabalho
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
