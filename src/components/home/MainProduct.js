import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
import { PRICES, PRODUCTS, whatsappLink } from "../../content/site";
import Reveal from "../common/Reveal";
import "./MainProduct.css";

export default function MainProduct() {
    const data = useStaticQuery(graphql`
        query HomeMainProductImage {
            image: file(relativePath: { eq: "fotos-thais/mostrando-livros-square.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
        }
    `);

    const image = getImage(data.image.childImageSharp.gatsbyImageData);
    const product = PRODUCTS.acompanhamento;

    return (
        <section className="tb-main-product tb-section" id="produto-principal">
            <div className="container-custom">
                <Reveal className="tb-main-product-card">
                    <span className="tb-main-product-shape tb-main-product-shape--one" aria-hidden="true" />
                    <span className="tb-main-product-shape tb-main-product-shape--two" aria-hidden="true" />

                    <div className="tb-main-product-copy">
                        <div className="tb-main-product-tags">
                            <span className="tb-tag">Produto principal</span>
                            <span className="tb-main-product-label">Acompanhamento Nutricional</span>
                        </div>
                        <h2>O processo que te acompanha de verdade</h2>
                        <p>
                            Mais do que uma consulta, um acompanhamento contínuo para entender a sua rotina, construir hábitos possíveis e ajustar o caminho nos
                            retornos. Presencial em Carlos Barbosa ou online para todo o Brasil.
                        </p>

                        <ul className="tb-check-list tb-main-product-list">
                            {product.includes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <div className="tb-main-product-price">
                            <div>
                                <span>{PRICES.acompanhamento.firstLabel}</span>
                                <strong>{PRICES.acompanhamento.first}</strong>
                            </div>
                            <div>
                                <span>{PRICES.acompanhamento.returnLabel}</span>
                                <strong>{PRICES.acompanhamento.return}</strong>
                            </div>
                        </div>

                        <div className="tb-actions tb-main-product-actions">
                            <a
                                className="tb-btn tb-btn--green"
                                href={whatsappLink(product.message)}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Quero iniciar meu acompanhamento
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </a>
                            <Link className="tb-btn tb-btn--ghost" to={product.href}>
                                Ver detalhes e planos
                            </Link>
                        </div>
                    </div>

                    <Reveal className="tb-main-product-media" delay={140}>
                        <div className="tb-main-product-photo">
                            <GatsbyImage image={image} alt="Thaís Basso segurando livros sobre hábitos, comunicação e saúde" />
                        </div>
                        <div className="tb-main-product-badge">
                            <i className="fas fa-book-open" aria-hidden="true" />
                            <span>
                                <strong>Cardápios ilustrados</strong>
                                inclusos no acompanhamento
                            </span>
                        </div>
                    </Reveal>
                </Reveal>
            </div>
        </section>
    );
}
