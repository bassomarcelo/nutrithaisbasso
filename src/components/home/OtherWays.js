import { Link } from "gatsby";
import React from "react";
import { PRODUCTS } from "../../content/site";
import Reveal from "../common/Reveal";
import "./OtherWays.css";

const CARDS = [
    {
        ...PRODUCTS.consultoria,
        icon: "fa-laptop-medical",
        meta: "30 dias · online",
    },
    {
        ...PRODUCTS.reset,
        icon: "fa-bolt",
        meta: "21 dias · no seu ritmo",
    },
];

export default function OtherWays() {
    return (
        <section className="tb-other-ways tb-section tb-section--lavender" id="outras-formas">
            <div className="container-custom">
                <Reveal className="tb-section-heading tb-section-heading--center">
                    <span className="tb-eyebrow">Portas de entrada</span>
                    <h2>Outras formas de começar</h2>
                    <p>Se o acompanhamento ainda não é o momento, estas são alternativas mais leves para dar o primeiro passo com direção.</p>
                </Reveal>

                <div className="tb-other-ways-grid">
                    {CARDS.map((card, index) => (
                        <Reveal className="tb-other-card" key={card.name} delay={index * 100}>
                            <div className="tb-other-card-head">
                                <span className="tb-icon-bubble tb-other-card-icon">
                                    <i className={`fas ${card.icon}`} aria-hidden="true" />
                                </span>
                                <span className="tb-tag tb-tag--violet">{card.label}</span>
                            </div>
                            <h3>{card.name}</h3>
                            <span className="tb-other-card-meta">{card.meta}</span>
                            <p>{card.description}</p>
                            <div className="tb-other-card-foot">
                                <div className="tb-other-card-price">
                                    <span>Investimento</span>
                                    <strong>{card.price}</strong>
                                </div>
                                <Link className="tb-other-card-link" to={card.href}>
                                    {card.cta}
                                    <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
