import { Link } from "gatsby";
import React from "react";
import { METHOD_PHASES } from "../../content/site";
import Reveal from "../common/Reveal";
import "./MethodSummary.css";

export default function MethodSummary() {
    return (
        <section className="tb-method-home tb-section" id="metodo">
            <div className="container-custom">
                <Reveal className="tb-section-heading tb-section-heading--center">
                    <span className="tb-eyebrow">O método</span>
                    <h2>Seja Real, Não Perfeito</h2>
                    <p>
                        Um processo em quatro fases que integra nutrição, comportamento e estilo de vida. Sem promessas mágicas: um caminho possível, construído
                        junto com você.
                    </p>
                </Reveal>

                <div className="tb-method-home-grid">
                    {METHOD_PHASES.map((phase, index) => (
                        <Reveal className="tb-method-card" key={phase.number} delay={index * 80}>
                            <span className="tb-method-card-number" aria-hidden="true">
                                {phase.number}
                            </span>
                            <span className="tb-method-card-icon">
                                <i className={`fas ${phase.icon}`} aria-hidden="true" />
                            </span>
                            <h3>{phase.title}</h3>
                            <p>{phase.text}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="tb-actions tb-actions--center tb-method-home-actions">
                    <Link className="tb-btn tb-btn--primary" to="/metodo-seja-real-nao-perfeito">
                        Conheça o método
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
