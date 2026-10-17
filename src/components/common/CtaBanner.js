import React from "react";
import Reveal from "./Reveal";
import "./CtaBanner.css";

export default function CtaBanner({ eyebrow = "Vamos começar?", title, text, children }) {
    return (
        <section className="tb-cta-banner-wrap">
            <div className="container-custom">
                <Reveal className="tb-cta-banner">
                    <span className="tb-cta-banner-shape tb-cta-banner-shape--one" aria-hidden="true" />
                    <span className="tb-cta-banner-shape tb-cta-banner-shape--two" aria-hidden="true" />
                    <div className="tb-cta-banner-copy">
                        <span className="tb-eyebrow">{eyebrow}</span>
                        <h2>{title}</h2>
                        {text && <p>{text}</p>}
                        {children && <div className="tb-actions">{children}</div>}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
