import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { whatsappLink } from "../../content/site";
import Reveal from "../common/Reveal";
import "./Hero.css";

export default function Hero() {
    const data = useStaticQuery(graphql`
        query HomeHeroImage {
            image: file(relativePath: { eq: "15-12-2025/IMG_7572.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
        }
    `);

    const image = getImage(data.image.childImageSharp.gatsbyImageData);

    return (
        <section className="tb-hero">
            <span className="tb-hero-blob tb-hero-blob--one" aria-hidden="true" />
            <span className="tb-hero-blob tb-hero-blob--two" aria-hidden="true" />
            <span className="tb-hero-watermark" aria-hidden="true">
                real
            </span>

            <div className="container-custom">
                <div className="tb-hero-grid">
                    <Reveal className="tb-hero-copy">
                        <span className="tb-eyebrow">Nutricionista comportamental · CRN-2 16231D</span>
                        <h1 className="tb-hero-title">
                            <span className="tb-hero-title-top">Nutricionista Comportamental</span>
                            Acompanhamento nutricional para <em>hábitos reais</em>
                        </h1>
                        <p className="tb-hero-subtitle">Saúde sem dieta, sem culpa e sem perfeição.</p>
                        <p className="tb-hero-text">
                            Um acompanhamento individual para você sair do ciclo de restrição e recomeço, aprender a comer com autonomia e construir uma rotina
                            que caiba na sua vida de verdade.
                        </p>

                        <div className="tb-actions tb-hero-actions">
                            <a
                                className="tb-btn tb-btn--primary"
                                href={whatsappLink("Olá, Thaís! Quero iniciar meu acompanhamento nutricional.")}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Quero iniciar meu acompanhamento
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </a>
                            <a className="tb-btn tb-btn--ghost" href="#metodo">
                                Conhecer o método
                            </a>
                        </div>

                        <ul className="tb-hero-trust" aria-label="Credenciais e diferenciais">
                            <li>
                                <i className="fas fa-heart" aria-hidden="true" />
                                Mais de 2.000 atendimentos
                            </li>
                            <li>
                                <i className="fas fa-laptop-medical" aria-hidden="true" />
                                Presencial e online
                            </li>
                            <li>
                                <i className="fas fa-seedling" aria-hidden="true" />
                                Nutrição funcional e comportamento
                            </li>
                        </ul>
                    </Reveal>

                    <Reveal className="tb-hero-visual" delay={120}>
                        <div className="tb-hero-ring" aria-hidden="true" />
                        <div className="tb-hero-photo">
                            <GatsbyImage image={image} alt="Thaís Basso em uma cozinha, sorrindo, com vegetais frescos sobre a bancada" />
                        </div>

                        <div className="tb-hero-card tb-hero-card--method">
                            <span className="tb-hero-card-icon">
                                <i className="fas fa-seedling" aria-hidden="true" />
                            </span>
                            <span>
                                <strong>Método próprio</strong>
                                Seja Real, Não Perfeito
                            </span>
                        </div>

                        <div className="tb-hero-card tb-hero-card--numbers">
                            <strong>+2.000</strong>
                            <span>
                                atendimentos
                                <br />
                                transformadores
                            </span>
                        </div>

                        <div className="tb-hero-card tb-hero-card--online">
                            <i className="fas fa-video" aria-hidden="true" />
                            Atende de qualquer lugar
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="tb-hero-marquee" aria-hidden="true">
                <div className="tb-hero-marquee-track">
                    <span>Sem dieta</span>
                    <i className="fas fa-circle" />
                    <span>Sem culpa</span>
                    <i className="fas fa-circle" />
                    <span>Sem perfeição</span>
                    <i className="fas fa-circle" />
                    <span>Nutrição comportamental</span>
                    <i className="fas fa-circle" />
                    <span>Hábitos reais</span>
                    <i className="fas fa-circle" />
                    <span>Sem dieta</span>
                    <i className="fas fa-circle" />
                    <span>Sem culpa</span>
                    <i className="fas fa-circle" />
                    <span>Sem perfeição</span>
                    <i className="fas fa-circle" />
                    <span>Nutrição comportamental</span>
                    <i className="fas fa-circle" />
                    <span>Hábitos reais</span>
                    <i className="fas fa-circle" />
                </div>
            </div>
        </section>
    );
}
