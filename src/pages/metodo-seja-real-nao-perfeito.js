import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import CtaBanner from "../components/common/CtaBanner";
import Layout from "../components/common/Layout";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import { METHOD_PHASES, whatsappLink } from "../content/site";

const DIFFERENTIALS = [
    {
        icon: "fa-user-check",
        title: "Individual, não padronizado",
        text: "Nada de plano pronto. A sua história, a sua rotina e os seus objetivos definem o caminho.",
    },
    {
        icon: "fa-comments",
        title: "Escuta antes de orientação",
        text: "Comportamento alimentar não se resolve com mais regras. Primeiro entendemos o que está por trás das escolhas.",
    },
    {
        icon: "fa-book-open",
        title: "Cardápios ilustrados",
        text: "Material visual e exclusivo para aprender combinações e trocas, sem depender de uma dieta engessada.",
    },
    {
        icon: "fa-chart-line",
        title: "Autonomia a longo prazo",
        text: "O objetivo é que você não precise de mim para sempre. Você aprende a cuidar de si com consciência.",
    },
];

const LIFESTYLE_PILLARS = [
    { icon: "fa-moon", title: "Sono", text: "Descanso de qualidade como base para energia, fome e humor." },
    { icon: "fa-utensils", title: "Alimentação", text: "Comida real, prazer, cultura e equilíbrio — sem extremos." },
    { icon: "fa-person-walking", title: "Movimento", text: "Atividade física possível, consistente e prazerosa." },
    { icon: "fa-brain", title: "Estresse", text: "Estratégias para lidar com a rotina e reduzir a fome emocional." },
    { icon: "fa-users", title: "Relações", text: "O ambiente e as pessoas ao redor influenciam as escolhas." },
    { icon: "fa-ban", title: "Vícios", text: "Consciência sobre comportamentos que sabotam o cuidado." },
];

export default function Metodo() {
    const data = useStaticQuery(graphql`
        query MetodoHeroImage {
            image: file(relativePath: { eq: "fotos-thais/foto-perfil.jpg" }) {
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
                eyebrow="Diferencial do acompanhamento"
                title="Método Seja Real, Não Perfeito"
                intro="Uma forma de trabalhar nutrição que começa pela sua realidade, não por um ideal impossível. O método integra nutrição, comportamento e estilo de vida em quatro fases."
                image={<GatsbyImage image={image} alt="Thaís Basso com um copo de café, sentada em um café" />}
            >
                <a
                    className="tb-btn tb-btn--primary"
                    href={whatsappLink("Olá, Thaís! Quero conhecer o Método Seja Real, Não Perfeito.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Quero aplicar o método com você
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/acompanhamento-nutricional">
                    Ver o acompanhamento
                </Link>
            </PageHero>

            <section className="tb-section">
                <div className="container-custom">
                    <div className="tb-split">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">A essência</span>
                            <h2>Real é possível. Perfeito é uma armadilha.</h2>
                            <p className="tb-lead">
                                A busca pela perfeição cria um ciclo: você se cobra, não consegue sustentar, sente culpa e recomeça. O método inverte essa lógica.
                            </p>
                            <p>
                                Aqui, o ponto de partida é a sua vida como ela é. A partir dela, construímos mudanças que fazem sentido, com ciência e acolhimento.
                                Ser real não é desistir de cuidar; é escolher um caminho que você consegue manter.
                            </p>
                            <p>
                                O resultado não é uma dieta que dura algumas semanas, mas uma relação mais consciente e saudável com a comida e com o seu corpo.
                            </p>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={120}>
                            <div className="tb-card" style={{ padding: "clamp(28px, 4vw, 44px)" }}>
                                <i className="fas fa-quote-left" style={{ color: "var(--pallete-pink)", fontSize: "1.8rem", marginBottom: 18 }} aria-hidden="true" />
                                <p style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.7rem)", fontFamily: "var(--second-font)", fontWeight: 300, lineHeight: 1.55, color: "var(--pallete-portfolio-first)" }}>
                                    “Não existe vida perfeita. Existe a vida que você tem — e o cuidado que cabe nela.”
                                </p>
                                <p className="tb-small" style={{ marginTop: 22 }}>
                                    Thaís Basso, nutricionista funcional e comportamental
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">As quatro fases</span>
                        <h2>Como o método acontece na prática</h2>
                        <p>Cada fase prepara a próxima. O processo não é linear e perfeito: ele se adapta ao seu ritmo e aos seus retornos.</p>
                    </Reveal>

                    <div className="tb-steps">
                        {METHOD_PHASES.map((phase, index) => (
                            <Reveal className="tb-step" key={phase.number} delay={index * 80}>
                                <span className="tb-step-number">{phase.number}</span>
                                <div>
                                    <i className={`fas ${phase.icon} tb-step-icon`} aria-hidden="true" />
                                    <h3>{phase.title}</h3>
                                    <p>{phase.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Diferenciais</span>
                        <h2>Por que esse método funciona para a vida real</h2>
                    </Reveal>
                    <div className="tb-grid tb-grid--4">
                        {DIFFERENTIALS.map((item, index) => (
                            <Reveal className="tb-card" key={item.title} delay={index * 70}>
                                <span className="tb-icon-bubble tb-icon-bubble--violet">
                                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                                </span>
                                <h3 style={{ fontSize: "1.05rem", fontFamily: "var(--main-font)", letterSpacing: 0 }}>{item.title}</h3>
                                <p className="tb-small">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Visão integrada</span>
                        <h2>Nutrição + comportamento + estilo de vida</h2>
                        <p>
                            Os seis pilares da medicina do estilo de vida atravessam o acompanhamento. Nenhum trabalha sozinho; todos influenciam a forma como você
                            come, descansa e vive.
                        </p>
                    </Reveal>
                    <div className="tb-grid tb-grid--3">
                        {LIFESTYLE_PILLARS.map((pillar, index) => (
                            <Reveal className="tb-card tb-card--flat" key={pillar.title} delay={index * 50}>
                                <span className="tb-icon-bubble">
                                    <i className={`fas ${pillar.icon}`} aria-hidden="true" />
                                </span>
                                <h3 style={{ fontSize: "1.03rem", fontFamily: "var(--main-font)", letterSpacing: 0 }}>{pillar.title}</h3>
                                <p className="tb-small">{pillar.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner
                eyebrow="Aplicar o método"
                title="Quer viver esse processo com acompanhamento?"
                text="O método ganha vida no acompanhamento nutricional. Vamos olhar para a sua realidade e construir, juntas, o próximo passo possível."
            >
                <a
                    className="tb-btn tb-btn--green"
                    href={whatsappLink("Olá, Thaís! Quero iniciar o acompanhamento com o Método Seja Real, Não Perfeito.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Quero iniciar meu acompanhamento
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/acompanhamento-nutricional">
                    Ver planos e valores
                </Link>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/metodo-seja-real-nao-perfeito"
        title="Método Seja Real, Não Perfeito | Thaís Basso"
        description="Conheça o Método Seja Real, Não Perfeito: quatro fases que integram nutrição, comportamento e estilo de vida para hábitos sustentáveis e sem culpa."
    />
);
