import React from "react";
import Layout from "../components/common/Layout";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import { ADDRESS, EMAIL, INSTAGRAM, PHONE_DISPLAY, SOCIAL_LINKS, whatsappLink } from "../content/site";
import "../styles/contato.css";

const CONTACT_CARDS = [
    {
        icon: "fab fa-whatsapp",
        label: "WhatsApp",
        value: PHONE_DISPLAY,
        text: "A forma mais rápida de falar comigo.",
        href: whatsappLink(),
        cta: "Abrir conversa",
        tone: "whatsapp",
    },
    {
        icon: "fab fa-instagram",
        label: "Instagram",
        value: "@nutrithaisbasso",
        text: "Conteúdos, bastidores e rotina do consultório.",
        href: INSTAGRAM,
        cta: "Visitar perfil",
        tone: "instagram",
    },
    {
        icon: "far fa-envelope",
        label: "E-mail",
        value: EMAIL,
        text: "Para assuntos profissionais e parcerias.",
        href: `mailto:${EMAIL}`,
        cta: "Enviar e-mail",
        tone: "email",
    },
];

export default function Contato() {
    return (
        <Layout>
            <PageHero
                eyebrow="Contato"
                title="Vamos conversar?"
                intro="Tire suas dúvidas, agende sua consulta ou me conte o que você está buscando. Será um prazer caminhar com você."
            >
                <a className="tb-btn tb-btn--whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Falar no WhatsApp
                </a>
                <a className="tb-btn tb-btn--ghost" href={ADDRESS.maps} target="_blank" rel="noreferrer">
                    Ver localização
                </a>
            </PageHero>

            <section className="tb-section">
                <div className="container-custom">
                    <div className="tb-grid tb-grid--3">
                        {CONTACT_CARDS.map((card, index) => (
                            <Reveal key={card.label} delay={index * 80}>
                                <a className={`tb-card tb-contact-card tb-contact-card--${card.tone}`} href={card.href} target="_blank" rel="noreferrer">
                                    <span className="tb-contact-card-icon">
                                        <i className={card.icon} aria-hidden="true" />
                                    </span>
                                    <span className="tb-contact-card-label">{card.label}</span>
                                    <strong>{card.value}</strong>
                                    <p>{card.text}</p>
                                    <span className="tb-contact-card-cta">
                                        {card.cta}
                                        <i className="fas fa-arrow-right" aria-hidden="true" />
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <div className="tb-contact-address">
                        <Reveal className="tb-contact-info">
                            <span className="tb-eyebrow">Consultório</span>
                            <h2>Onde me encontrar</h2>
                            <p className="tb-lead">Atendimento presencial em Carlos Barbosa/RS e acompanhamento online para todo o Brasil.</p>

                            <div className="tb-contact-info-block">
                                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                                <p>
                                    {ADDRESS.street}
                                    <br />
                                    {ADDRESS.building}
                                    <br />
                                    {ADDRESS.city}
                                </p>
                            </div>

                            <div className="tb-contact-info-block">
                                <i className="fab fa-whatsapp" aria-hidden="true" />
                                <p>
                                    <a href={whatsappLink()} target="_blank" rel="noreferrer">
                                        {PHONE_DISPLAY}
                                    </a>
                                </p>
                            </div>

                            <div className="tb-contact-info-block">
                                <i className="far fa-envelope" aria-hidden="true" />
                                <p>
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                </p>
                            </div>

                            <div className="tb-actions" style={{ marginTop: 28 }}>
                                <a className="tb-btn tb-btn--primary" href={ADDRESS.maps} target="_blank" rel="noreferrer">
                                    Abrir no Google Maps
                                    <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                                </a>
                            </div>

                            <div className="tb-contact-social">
                                {SOCIAL_LINKS.map((social) => (
                                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                                        <i className={`fab ${social.icon}`} aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal className="tb-contact-map" delay={120}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.602673893178!2d-51.49857558490232!3d-29.293992282161344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c19ec86ec0001%3A0x75bb7b18f1a1b35e!2sEdif%C3%ADcio%20R%C3%A1dio%20Esta%C3%A7%C3%A3o%20-%20R.%20Humberto%20Accorsi%2C%20230%20-%20Sala%2002%20-%20Aurora%2C%20Carlos%20Barbosa%20-%20RS%2C%2095185-000!5e0!3m2!1spt-BR!2sbr!4v1681608930648!5m2!1spt-BR!2sbr"
                                title="Endereço do consultório - Google Maps"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/contato"
        title="Contato | Thaís Basso Nutricionista"
        description="Fale com a Thaís Basso pelo WhatsApp, Instagram ou e-mail. Consultório em Carlos Barbosa/RS e atendimento online para todo o Brasil."
    />
);
