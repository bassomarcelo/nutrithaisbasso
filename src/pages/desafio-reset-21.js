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

const FOR_WHO = [
    {
        icon: "fa-compass",
        title: "Quem está perdida no começo",
        text: "Sabe que precisa mudar, mas não sabe por onde começar. O Reset organiza as primeiras decisões.",
    },
    {
        icon: "fa-clock",
        title: "Quem quer um formato curto",
        text: "21 dias para criar clareza e consistência, sem assumir um acompanhamento longo neste momento.",
    },
    {
        icon: "fa-lightbulb",
        title: "Quem quer sair do automático",
        text: "Uma pausa guiada para olhar para alimentação, sono, movimento e comportamento com mais consciência.",
    },
];

const WEEKS = [
    {
        title: "Semana 1 · Reset",
        text: "Observar a rotina, identificar o que está no automático e organizar a base: hidratação, refeições principais, sono e ambiente.",
    },
    {
        title: "Semana 2 · Construção",
        text: "Colocar em prática escolhas possíveis. Aprender combinações, planejamento e trocas para casa, trabalho e vida social.",
    },
    {
        title: "Semana 3 · Consolidação",
        text: "Ajustar o que não funcionou, fortalecer o que já funciona e criar um plano de continuidade para depois dos 21 dias.",
    },
];

const BENEFITS = [
    { icon: "fa-list-check", title: "Mais clareza", text: "Você entende o que priorizar e por onde começar sem se perder em informações." },
    { icon: "fa-seedling", title: "Hábitos possíveis", text: "Pequenas mudanças consistentes, em vez de uma revolução impossível de manter." },
    { icon: "fa-brain", title: "Menos culpa", text: "Uma relação mais tranquila com as escolhas e com os deslizes do caminho." },
    { icon: "fa-route", title: "Continuidade", text: "Ao final, você tem um plano para seguir e pode evoluir para o acompanhamento." },
];

export default function DesafioReset21() {
    const data = useStaticQuery(graphql`
        query ResetHeroImage {
            image: file(relativePath: { eq: "plates/plate-with-salads.webp" }) {
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
                eyebrow="Produto de entrada"
                title="Desafio Reset 21"
                intro="21 dias para sair do automático, reorganizar a rotina e sentir o que é possível quando a alimentação deixa de ser uma briga com você mesma."
                image={<GatsbyImage image={image} alt="Prato colorido com saladas e alimentos frescos" />}
            >
                <a
                    className="tb-btn tb-btn--primary"
                    href={whatsappLink("Olá, Thaís! Quero entrar no Desafio Reset 21.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Quero entrar no Reset 21
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
                            <span className="tb-eyebrow">O que é</span>
                            <h2>Um reset de rota, não uma dieta de 21 dias</h2>
                            <p className="tb-lead">
                                O Desafio Reset 21 é um programa de entrada para quem quer reorganizar a relação com a alimentação e o estilo de vida em um formato
                                curto, prático e acompanhado.
                            </p>
                            <p>
                                Durante três semanas, você recebe orientações, desafios e conteúdos para olhar para a sua rotina com mais consciência. Não há
                                alimento proibido nem promessa de resultado milagroso: há direção para começar e continuar.
                            </p>
                            <div className="tb-note" style={{ marginTop: 24 }}>
                                O Reset não substitui o acompanhamento individual, mas é uma excelente porta de entrada para quem quer entender a proposta antes de
                                começar um processo mais profundo.
                            </div>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={100}>
                            <div className="tb-media-frame">
                                <GatsbyImage image={image} alt="Refeição colorida e equilibrada" />
                                <span className="tb-media-frame__badge">
                                    <i className="fas fa-bolt" aria-hidden="true" />
                                    21 dias de prática
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Indicação</span>
                        <h2>Para quem é o Reset 21?</h2>
                    </Reveal>
                    <div className="tb-grid tb-grid--3">
                        {FOR_WHO.map((item, index) => (
                            <Reveal className="tb-card" key={item.title} delay={index * 80}>
                                <span className="tb-icon-bubble">
                                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                                </span>
                                <h3 style={{ fontSize: "1.06rem", fontFamily: "var(--main-font)", letterSpacing: 0 }}>{item.title}</h3>
                                <p className="tb-small">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Estrutura</span>
                        <h2>Como funcionam os 21 dias</h2>
                        <p>Três semanas, três focos. A proposta é construir consistência, não perfeição.</p>
                    </Reveal>
                    <div className="tb-steps">
                        {WEEKS.map((week, index) => (
                            <Reveal className="tb-step" key={week.title} delay={index * 80}>
                                <span className="tb-step-number">{`0${index + 1}`}</span>
                                <div>
                                    <h3>{week.title}</h3>
                                    <p>{week.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Benefícios</span>
                        <h2>O que você leva desses 21 dias</h2>
                    </Reveal>
                    <div className="tb-grid tb-grid--4">
                        {BENEFITS.map((item, index) => (
                            <Reveal className="tb-card" key={item.title} delay={index * 60}>
                                <span className="tb-icon-bubble tb-icon-bubble--pink">
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
                        <h2>Um valor de entrada, sem letras miúdas</h2>
                    </Reveal>

                    <div style={{ maxWidth: 620, margin: "0 auto" }}>
                        <Reveal className="tb-price-panel tb-price-panel--featured">
                            <div className="tb-price-panel__head">
                                <h3>Desafio Reset 21</h3>
                                <span className="tb-tag">21 dias</span>
                            </div>
                            <div className="tb-price">
                                <strong>{PRICES.reset}</strong>
                                <span>pagamento único</span>
                            </div>
                            <ul className="tb-check-list">
                                <li>Trilha de conteúdo e desafios durante 21 dias</li>
                                <li>Orientações práticas de alimentação e rotina</li>
                                <li>Materiais de apoio para organizar as refeições</li>
                                <li>Acesso ao grupo fechado de participantes</li>
                            </ul>
                            <a
                                className="tb-btn tb-btn--primary"
                                href={whatsappLink("Olá, Thaís! Quero entrar no Desafio Reset 21.")}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Quero entrar no Reset 21
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
                        <span className="tb-tag tb-tag--violet">E depois dos 21 dias?</span>
                        <h2 style={{ marginTop: 18 }}>Continue com acompanhamento individual</h2>
                        <p className="tb-lead" style={{ maxWidth: 640, margin: "0 auto 24px" }}>
                            Se o Reset mostrar que você quer ir mais fundo, o Acompanhamento Nutricional oferece um plano individual, retornos e suporte próximo para
                            transformar as primeiras mudanças em hábitos duradouros.
                        </p>
                        <Link className="tb-btn tb-btn--primary" to="/acompanhamento-nutricional">
                            Conhecer o Acompanhamento Nutricional
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            <Faq items={FAQ.reset} title="Dúvidas sobre o Reset 21" />

            <CtaBanner
                eyebrow="Comece agora"
                title="21 dias para mudar a direção, não a sua vida inteira"
                text="Me chame no WhatsApp para garantir sua vaga e receber as orientações de acesso ao Desafio Reset 21."
            >
                <a className="tb-btn tb-btn--green" href={whatsappLink("Olá, Thaís! Quero entrar no Desafio Reset 21.")} target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Quero entrar no Reset 21
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/consultoria-nutricional-online">
                    Conhecer a Consultoria Online
                </Link>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/desafio-reset-21"
        title="Desafio Reset 21 | Thaís Basso Nutricionista"
        description="Desafio Reset 21: 21 dias para reorganizar a rotina, criar hábitos possíveis e sair do ciclo de restrição e culpa. Valor visível e inscrição pelo WhatsApp."
    />
);
