import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import CtaBanner from "../components/common/CtaBanner";
import Faq from "../components/common/Faq";
import Layout from "../components/common/Layout";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import { FAQ, PRICES, whatsappLink } from "../content/site";

const INCLUDES = [
    { icon: "fa-clipboard-list", title: "Questionário pré-consulta", text: "Você adianta informações sobre saúde, rotina, preferências e objetivos." },
    { icon: "fa-video", title: "Encontro online de 1h", text: "Conversa individual por videochamada para entender o seu momento e orientar o plano." },
    { icon: "fa-utensils", title: "Plano alimentar para 30 dias", text: "Um plano personalizado, flexível e baseado na sua rotina e no que você gosta de comer." },
    { icon: "fa-book-open", title: "Cardápios ilustrados", text: "Material visual para facilitar combinações, porções e trocas no dia a dia." },
    { icon: "fa-exchange-alt", title: "Orientações de trocas", text: "Você aprende a adaptar as refeições para casa, trabalho, viagens e eventos sociais." },
    { icon: "fa-comment-dots", title: "Suporte por 30 dias", text: "Acompanhamento por WhatsApp durante o período para tirar dúvidas e ajustar o que for necessário." },
];

export default function ConsultoriaOnline() {
    const data = useStaticQuery(graphql`
        query ConsultoriaHeroImage {
            image: file(relativePath: { eq: "fotos-thais/bebendo-cafe-square.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
        }
    `);
    const image = getImage(data.image.childImageSharp.gatsbyImageData);

    return (
        <Layout>
            <PageHero
                eyebrow="Uma alternativa mais leve"
                title="Consultoria Nutricional Online – 30 dias"
                intro="Um direcionamento individual para organizar a alimentação, entender o que faz sentido para a sua rotina e começar com segurança. Ideal para quem quer um primeiro passo mais pontual."
                image={<GatsbyImage image={image} alt="Thaís Basso bebendo café em um café" />}
            >
                <a
                    className="tb-btn tb-btn--primary"
                    href={whatsappLink("Olá, Thaís! Quero contratar a Consultoria Online de 30 dias.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Quero minha consultoria
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
                <a className="tb-btn tb-btn--ghost" href="#investimento">
                    Ver investimento
                </a>
            </PageHero>

            <section className="tb-section">
                <div className="container-custom">
                    <div className="tb-split">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">Para quem é</span>
                            <h2>Um primeiro passo com direção, não com pressão</h2>
                            <p className="tb-lead">
                                A consultoria não substitui o acompanhamento contínuo, mas pode ser o empurrão que faltava para sair do improviso.
                            </p>
                            <ul className="tb-check-list">
                                <li>Quem quer organizar a alimentação com um plano pontual de 30 dias.</li>
                                <li>Quem está começando e ainda não quer assumir um processo longo.</li>
                                <li>Quem precisa de orientação em uma fase específica: rotina nova, viagem, exames, energia.</li>
                                <li>Quem quer conhecer o trabalho antes de iniciar o acompanhamento completo.</li>
                            </ul>

                            <div className="tb-note" style={{ marginTop: 26 }}>
                                Se, ao final dos 30 dias, você sentir que precisa de ajustes mais próximos, o próximo passo natural é o Acompanhamento Nutricional.
                            </div>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={100}>
                            <div className="tb-media-frame">
                                <GatsbyImage image={image} alt="Thaís Basso em um café, com um copo na mão" />
                                <span className="tb-media-frame__badge">
                                    <i className="fas fa-laptop-medical" aria-hidden="true" />
                                    100% online
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">O que inclui</span>
                        <h2>Tudo o que você recebe nos 30 dias</h2>
                    </Reveal>
                    <div className="tb-grid tb-grid--3">
                        {INCLUDES.map((item, index) => (
                            <Reveal className="tb-card" key={item.title} delay={index * 60}>
                                <span className="tb-icon-bubble">
                                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                                </span>
                                <h3 style={{ fontSize: "1.03rem", fontFamily: "var(--main-font)", letterSpacing: 0 }}>{item.title}</h3>
                                <p className="tb-small">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section" id="investimento">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Investimento</span>
                        <h2>Valor visível, decisão consciente</h2>
                        <p>Sem “chama no direct para saber o valor”. A consultoria tem um valor único para os 30 dias.</p>
                    </Reveal>

                    <div style={{ maxWidth: 620, margin: "0 auto" }}>
                        <Reveal className="tb-price-panel tb-price-panel--featured">
                            <div className="tb-price-panel__head">
                                <h3>Consultoria Online</h3>
                                <span className="tb-tag tb-tag--violet">30 dias</span>
                            </div>
                            <div className="tb-price">
                                <strong>{PRICES.consultoria}</strong>
                                <span>pagamento único</span>
                            </div>
                            <ul className="tb-check-list">
                                <li>Encontro online individual de 1h</li>
                                <li>Plano alimentar personalizado para 30 dias</li>
                                <li>Cardápios ilustrados e orientações de trocas</li>
                                <li>Suporte por WhatsApp durante o período</li>
                            </ul>
                            <a
                                className="tb-btn tb-btn--primary"
                                href={whatsappLink("Olá, Thaís! Quero contratar a Consultoria Online de 30 dias.")}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Quero minha consultoria
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </a>
                            <p className="tb-small" style={{ marginTop: 16 }}>
                                Pagamento via PIX, débito, crédito ou link de pagamento.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <div className="tb-card" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", padding: "clamp(30px, 5vw, 52px)" }}>
                        <span className="tb-tag">Quer ir além?</span>
                        <h2 style={{ marginTop: 18 }}>Quando a consultoria é o começo, não o fim</h2>
                        <p className="tb-lead" style={{ maxWidth: 620, margin: "0 auto 24px" }}>
                            O acompanhamento nutricional oferece retornos, ajustes contínuos e um olhar mais profundo sobre comportamento e estilo de vida. Se esse é o
                            seu momento, a consultoria pode ser a porta de entrada.
                        </p>
                        <Link className="tb-btn tb-btn--primary" to="/acompanhamento-nutricional">
                            Conhecer o Acompanhamento Nutricional
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            <Faq items={FAQ.consultoria} title="Dúvidas sobre a consultoria" />

            <CtaBanner
                eyebrow="Pronta para começar?"
                title="Um passo de cada vez, com direção"
                text="Me chame no WhatsApp para alinhar os detalhes e confirmar sua vaga na Consultoria Online de 30 dias."
            >
                <a
                    className="tb-btn tb-btn--green"
                    href={whatsappLink("Olá, Thaís! Quero contratar a Consultoria Online de 30 dias.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Quero minha consultoria
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/metodo-seja-real-nao-perfeito">
                    Conhecer o método
                </Link>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/consultoria-nutricional-online"
        title="Consultoria Nutricional Online – 30 dias | Thaís Basso"
        description="Consultoria nutricional online de 30 dias com encontro individual, plano personalizado, cardápios ilustrados e valor visível. Uma alternativa mais leve para começar."
    />
);
