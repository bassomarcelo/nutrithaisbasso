import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import CtaBanner from "../components/common/CtaBanner";
import Faq from "../components/common/Faq";
import Layout from "../components/common/Layout";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import { FAQ, METHOD_PHASES, PRICES, whatsappLink } from "../content/site";

const AUDIENCE = [
    {
        icon: "fa-redo",
        title: "Cansada do ciclo",
        text: "Você já perdeu a conta de quantas dietas começou e não conseguiu manter. Quer um caminho que não dependa de recomeçar sempre.",
    },
    {
        icon: "fa-heart-pulse",
        title: "Quer saúde de verdade",
        text: "Busca melhorar exames, disposição, sono e bem-estar, com orientação baseada em evidências e adaptada ao seu corpo.",
    },
    {
        icon: "fa-apple-alt",
        title: "Quer emagrecer sem sofrer",
        text: "Deseja mudar a composição corporal sem terrorismo nutricional, preservando o prazer de comer e a vida social.",
    },
    {
        icon: "fa-briefcase",
        title: "Tem rotina corrida",
        text: "Trabalha, estuda, cuida da casa ou da família. Precisa de um plano que caiba no seu dia, não que exija um dia perfeito.",
    },
];

const BENEFITS = [
    {
        icon: "fa-battery-full",
        title: "Mais energia no dia a dia",
        text: "Alimentação organizada, sono e movimento trabalhando juntos para você sair do modo automático e do cansaço constante.",
    },
    {
        icon: "fa-utensils",
        title: "Uma relação mais leve",
        text: "Menos culpa, menos proibição e mais consciência. Você aprende a fazer escolhas que funcionam no mundo real.",
    },
    {
        icon: "fa-chart-line",
        title: "Resultados sustentáveis",
        text: "O foco não é perder rápido, é consolidar hábitos e manter os resultados a longo prazo, com autonomia.",
    },
    {
        icon: "fa-book-open",
        title: "Cardápios ilustrados",
        text: "Materiais visuais que facilitam entender combinações, porções e trocas para as refeições da sua semana.",
    },
];

export default function AcompanhamentoNutricional() {
    const data = useStaticQuery(graphql`
        query AcompanhamentoHeroImage {
            image: file(relativePath: { eq: "fotos-thais/atendimento-square.png" }) {
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
                eyebrow="Produto principal"
                title="Acompanhamento Nutricional"
                intro="O acompanhamento nutricional comportamental é um processo individual para mudar a relação com a comida, organizar a rotina e construir hábitos que permanecem. Presencial em Carlos Barbosa/RS ou online para todo o Brasil."
                image={<GatsbyImage image={image} alt="Thaís Basso em atendimento nutricional" />}
            >
                <a
                    className="tb-btn tb-btn--primary"
                    href={whatsappLink("Olá, Thaís! Quero iniciar meu acompanhamento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Quero iniciar meu acompanhamento
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
                <a className="tb-btn tb-btn--ghost" href="#valores">
                    Ver planos e valores
                </a>
            </PageHero>

            <section className="tb-section">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Indicação</span>
                        <h2>Para quem é o acompanhamento nutricional?</h2>
                        <p>Para quem quer cuidar da saúde com um plano possível, individualizado e sem a pressão da perfeição.</p>
                    </Reveal>
                    <div className="tb-grid tb-grid--4">
                        {AUDIENCE.map((item, index) => (
                            <Reveal className="tb-card" key={item.title} delay={index * 70}>
                                <span className="tb-icon-bubble">
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
                    <div className="tb-split">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">Como funciona</span>
                            <h2>Um caminho claro, do primeiro contato à manutenção</h2>
                            <p className="tb-lead">
                                Cada etapa tem um objetivo. Você entende o que está fazendo, por que está fazendo e como ajustar quando a vida muda.
                            </p>
                            <p>
                                O processo começa com uma conversa para alinhar expectativas. Na consulta, avaliamos história de saúde, rotina, exames e relação com a
                                comida. A partir disso, construímos um plano que faça sentido e revisamos juntas nos retornos.
                            </p>
                            <a
                                className="tb-btn tb-btn--primary"
                                href={whatsappLink("Olá, Thaís! Quero entender como funciona o acompanhamento nutricional.")}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Tirar minhas dúvidas
                            </a>
                        </Reveal>

                        <div className="tb-steps">
                            {[
                                {
                                    title: "Conversa inicial",
                                    text: "Pelo WhatsApp, entendemos o seu momento, o seu objetivo e a melhor modalidade para começar.",
                                },
                                {
                                    title: "Consulta completa",
                                    text: "Anamnese, avaliação física, análise de exames e escuta sobre rotina, sono, comportamento e história alimentar.",
                                },
                                {
                                    title: "Plano possível",
                                    text: "Plano alimentar personalizado, cardápios ilustrados e orientações de trocas para a sua vida real.",
                                },
                                {
                                    title: "Retornos e manutenção",
                                    text: "Ajustes periódicos, suporte por WhatsApp e construção de autonomia para manter os resultados.",
                                },
                            ].map((step, index) => (
                                <Reveal className="tb-step" key={step.title} delay={index * 70}>
                                    <span className="tb-step-number">{`0${index + 1}`}</span>
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p>{step.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="tb-section">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Benefícios</span>
                        <h2>O que muda no seu dia a dia</h2>
                        <p>Saúde não é apenas o número na balança. É disposição, tranquilidade, constância e liberdade para escolher.</p>
                    </Reveal>
                    <div className="tb-grid tb-grid--4">
                        {BENEFITS.map((item, index) => (
                            <Reveal className="tb-card" key={item.title} delay={index * 70}>
                                <span className="tb-icon-bubble tb-icon-bubble--pink">
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
                    <div className="tb-split tb-split--reverse">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">Método aplicado</span>
                            <h2>Seja Real, Não Perfeito também dentro da consulta</h2>
                            <p className="tb-lead">
                                O método organiza o acompanhamento em quatro fases: acolher a realidade, entender o comportamento, construir o possível e sustentar a
                                autonomia.
                            </p>
                            <ul className="tb-check-list" style={{ marginBottom: 28 }}>
                                {METHOD_PHASES.map((phase) => (
                                    <li key={phase.number}>
                                        <strong>{phase.title}.</strong> {phase.text}
                                    </li>
                                ))}
                            </ul>
                            <Link className="tb-btn tb-btn--primary" to="/metodo-seja-real-nao-perfeito">
                                Conheça o método completo
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={120}>
                            <div className="tb-media-frame tb-media-frame--portrait">
                                <GatsbyImage image={image} alt="Thaís Basso durante uma consulta de nutrição" />
                                <span className="tb-media-frame__badge">
                                    <i className="fas fa-seedling" aria-hidden="true" />
                                    Nutrição + comportamento
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="tb-section" id="valores">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Transparência</span>
                        <h2>Planos e valores</h2>
                        <p>Valores visíveis, sem “consulte no direct”. O investimento é conversado com transparência desde o primeiro contato.</p>
                    </Reveal>

                    <div className="tb-grid tb-grid--2">
                        <Reveal className="tb-price-panel tb-price-panel--featured">
                            <div className="tb-price-panel__head">
                                <h3>Primeira consulta + retorno</h3>
                                <span className="tb-tag">Mais escolhido</span>
                            </div>
                            <div className="tb-price">
                                <strong>{PRICES.acompanhamento.first}</strong>
                                <span>1ª consulta (1h15) + retorno (50 min)</span>
                            </div>
                            <ul className="tb-check-list">
                                <li>Questionário pré-consulta e anamnese completa</li>
                                <li>Avaliação física e análise de exames</li>
                                <li>Plano alimentar personalizado entregue na consulta</li>
                                <li>Cardápios ilustrados e orientações de trocas</li>
                                <li>Materiais de apoio impressos ou digitais</li>
                                <li>Suporte por WhatsApp entre os atendimentos</li>
                            </ul>
                            <a
                                className="tb-btn tb-btn--primary"
                                href={whatsappLink("Olá, Thaís! Quero agendar minha primeira consulta + retorno.")}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Quero agendar
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </a>
                        </Reveal>

                        <Reveal className="tb-price-panel" delay={120}>
                            <div className="tb-price-panel__head">
                                <h3>Continuidade</h3>
                                <span className="tb-tag tb-tag--violet">Retornos</span>
                            </div>
                            <div className="tb-price">
                                <strong>{PRICES.acompanhamento.return}</strong>
                                <span>retorno avulso</span>
                            </div>
                            <p className="tb-small">
                                A frequência dos retornos é definida em conjunto, de acordo com o seu objetivo, a sua rotina e o seu momento. Pode ser semanal,
                                quinzenal ou mensal.
                            </p>
                            <div className="tb-note" style={{ marginTop: 24 }}>
                                Formas de pagamento: PIX, cartão de débito, cartão de crédito e link de pagamento. Consulte as condições de parcelamento pelo
                                WhatsApp.
                            </div>
                            <div style={{ marginTop: 24 }}>
                                <a
                                    className="tb-btn tb-btn--ghost"
                                    href={whatsappLink("Olá, Thaís! Quero saber mais sobre os retornos do acompanhamento.")}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Tirar dúvidas sobre retornos
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Faq items={FAQ.acompanhamento} title="Dúvidas sobre o acompanhamento" />

            <CtaBanner
                eyebrow="Seu próximo passo"
                title="Vamos construir juntas um caminho possível?"
                text="Me chame no WhatsApp para conversarmos sobre o seu momento. Se preferir começar de forma mais leve, a Consultoria Online de 30 dias também pode ser uma porta de entrada."
            >
                <a
                    className="tb-btn tb-btn--green"
                    href={whatsappLink("Olá, Thaís! Quero iniciar meu acompanhamento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Quero iniciar meu acompanhamento
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
        path="/acompanhamento-nutricional"
        title="Acompanhamento Nutricional Comportamental | Thaís Basso"
        description="Acompanhamento nutricional comportamental presencial em Carlos Barbosa/RS e online. Plano personalizado, cardápios ilustrados, retornos e valores visíveis."
    />
);
