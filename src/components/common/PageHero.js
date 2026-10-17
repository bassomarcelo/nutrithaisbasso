import React from "react";
import Reveal from "./Reveal";
import "./PageHero.css";

export default function PageHero({ eyebrow, title, intro, image, imageAlt = "", children, compact = false, className = "" }) {
    return (
        <section className={`tb-page-hero ${compact ? "tb-page-hero--compact" : ""} ${className}`.trim()}>
            <span className="tb-page-hero-blob tb-page-hero-blob--one" aria-hidden="true" />
            <span className="tb-page-hero-blob tb-page-hero-blob--two" aria-hidden="true" />

            <div className="container-custom">
                <div className={`tb-page-hero-grid ${image ? "" : "tb-page-hero-grid--solo"}`.trim()}>
                    <Reveal className="tb-page-hero-copy">
                        {eyebrow && <span className="tb-eyebrow">{eyebrow}</span>}
                        <h1>{title}</h1>
                        {intro && <p className="tb-lead">{intro}</p>}
                        {children && <div className="tb-actions">{children}</div>}
                    </Reveal>

                    {image && (
                        <Reveal className="tb-page-hero-media" delay={140}>
                            <div className="tb-photo-frame">
                                {typeof image === "string" ? <img src={image} alt={imageAlt} /> : image}
                            </div>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    );
}
