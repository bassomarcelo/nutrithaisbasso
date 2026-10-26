import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import CtaBanner from "../components/common/CtaBanner";
import Layout from "../components/common/Layout";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import { INSTAGRAM, whatsappLink } from "../content/site";

const FORMATION = [
    {
        period: "2019–21",
        title: "Pós-graduação em Nutrição Funcional e Comportamento Alimentar",
        institution: "UCS – Universidade de Caxias do Sul",
        text: "400 horas de formação com foco na avaliação integrada do indivíduo e na mudança de comportamento alimentar.",
    },
    {
        period: "2021",
        title: "Especialização em Emagrecimento e Saúde",
        institution: "NBE Academy",
        text: "180 horas dedicadas às diretrizes atuais de prevenção e tratamento da obesidade e comorbidades.",
    },
    {
        period: "2012–18",
        title: "Graduação em Nutrição",
        institution: "UCS – Universidade de Caxias do Sul",
        text: "Formação generalista com práticas em saúde pública, clínica, alimentação coletiva e nutrição esportiva.",
    },
    {
        period: "Contínuo",
        title: "Mais de 10 cursos de especialização",
        institution: "Saúde intestinal, nutrição vegetariana, saúde da mulher e fitoterapia",
        text: "Atualização constante para oferecer um cuidado integrado e baseado em evidências.",
    },
];

export default function Sobre() {
    const data = useStaticQuery(graphql`
        query SobreImages {
            portrait: file(relativePath: { eq: "04-2026/IMG_1578.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
            office: file(relativePath: { eq: "fotos-thais/foto-consultorio.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
        }
    `);
    const portrait = getImage(data.portrait.childImageSharp.gatsbyImageData);
    const office = getImage(data.office.childImageSharp.gatsbyImageData);

    return (
        <Layout>
            <PageHero
                eyebrow="Sobre mim · CRN-2 16231D"
                title="Thaís Basso"
                intro="Nutricionista funcional e comportamental. Uma trajetória construída entre a ciência da nutrição e a escuta do que faz sentido para a vida real das pessoas."
                image={<GatsbyImage image={portrait} alt="Thaís Basso sorrindo, sentada junto à janela" />}
            >
                <a
                    className="tb-btn tb-btn--primary"
                    href={whatsappLink("Olá, Thaís! Quero conversar sobre o atendimento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Quero conversar
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
                <a className="tb-btn tb-btn--ghost" href={INSTAGRAM} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" aria-hidden="true" />
                    Me acompanhe no Instagram
                </a>
            </PageHero>

            <section className="tb-section">
                <div className="container-custom">
                    <div className="tb-split">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">Minha história</span>
                            <h2>Saúde é mais do que o corpo físico</h2>
                            <p className="tb-lead">
                                Desde cedo eu sabia que queria trabalhar com saúde. Mas foi vivendo na pele um período de ansiedade intensa que entendi o tamanho
                                real dessa responsabilidade.
                            </p>
                            <p>
                                Uma rotina exaustiva, viagens de trabalho e noites sem dormir me mostraram que não importa onde estamos ou o que temos: se não
                                estamos bem por dentro, tudo perde o sentido.
                            </p>
                            <p>
                                Mudei o meu estilo de vida. Priorizei sono, movimento, pausas, terapia e uma alimentação que fizesse sentido para mim. Foi então que me
                                apaixonei pela nutrição comportamental e pela medicina do estilo de vida.
                            </p>
                            <p>
                                Hoje, olho para cada pessoa em sua totalidade. Não trato apenas o que ela come, mas como vive, sente e se relaciona com a comida. É
                                essa visão que guia o meu trabalho.
                            </p>

                            <div className="tb-stats">
                                <div className="tb-stat">
                                    <strong>+2.000</strong>
                                    <span>atendimentos no Brasil e no mundo</span>
                                </div>
                                <div className="tb-stat">
                                    <strong>10+</strong>
                                    <span>cursos de especialização</span>
                                </div>
                                <div className="tb-stat">
                                    <strong>CRN-2</strong>
                                    <span>16231D</span>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={120}>
                            <div className="tb-media-frame tb-media-frame--portrait">
                                <GatsbyImage image={office} alt="Consultório de nutrição da Thaís Basso" />
                                <span className="tb-media-frame__badge">
                                    <i className="fas fa-location-dot" aria-hidden="true" />
                                    Carlos Barbosa/RS
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Formação</span>
                        <h2>Ciência e atualização constante</h2>
                        <p>Uma base sólida para cuidar com responsabilidade, sem modismos e sem promessas vazias.</p>
                    </Reveal>

                    <div className="tb-steps">
                        {FORMATION.map((item, index) => (
                            <Reveal className="tb-step" key={item.title} delay={index * 70}>
                                <span className="tb-step-number" style={{ fontSize: "1rem", fontFamily: "var(--second-font)", letterSpacing: "0.06em" }}>
                                    {item.period}
                                </span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p style={{ color: "var(--pallete-fisrt)", fontWeight: 600, marginBottom: 6 }}>{item.institution}</p>
                                    <p>{item.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section">
                <div className="container-custom">
                    <div className="tb-split tb-split--reverse">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">O método</span>
                            <h2>Como nasceu o Seja Real, Não Perfeito</h2>
                            <p className="tb-lead">
                                O método nasceu da prática clínica, ao perceber que as pessoas não falhavam por falta de informação. Falhavam porque os planos não
                                cabiam na vida real.
                            </p>
                            <p>
                                A proposta é unir o que há de mais atual na nutrição com um olhar humano para comportamento, rotina e estilo de vida. Menos perfeição,
                                mais consistência. Menos proibição, mais autonomia.
                            </p>
                            <p>
                                É esse caminho que ofereço no consultório, com escuta, ciência e planos que respeitam a sua realidade.
                            </p>
                            <Link className="tb-btn tb-btn--primary" to="/metodo-seja-real-nao-perfeito">
                                Conheça o método
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={100}>
                            <div className="tb-media-frame">
                                <GatsbyImage image={portrait} alt="Thaís Basso sentada junto à janela" />
                                <span className="tb-media-frame__badge">
                                    <i className="fas fa-seedling" aria-hidden="true" />
                                    Nutrição com escuta
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <CtaBanner
                eyebrow="Vamos conversar?"
                title="Conheça meu trabalho de perto"
                text="Se a minha forma de olhar para a saúde fizer sentido para você, me chame no WhatsApp. Vamos encontrar o seu próximo passo."
            >
                <a
                    className="tb-btn tb-btn--green"
                    href={whatsappLink("Olá, Thaís! Quero conversar sobre o atendimento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Falar no WhatsApp
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/consultoria-nutricional-online">
                    Ver a consultoria
                </Link>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/sobre"
        title="Sobre Thaís Basso | Nutricionista Funcional e Comportamental"
        description="Conheça Thaís Basso, nutricionista funcional e comportamental (CRN-2 16231D), a criação do Método Seja Real, Não Perfeito e sua visão sobre saúde."
    />
);
