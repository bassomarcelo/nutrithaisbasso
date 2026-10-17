import React, { useState } from "react";
import "./Faq.css";

export default function Faq({ items, title = "Perguntas frequentes", subtitle }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="tb-faq">
            <div className="container-custom">
                {title && (
                    <div className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Dúvidas</span>
                        <h2>{title}</h2>
                        {subtitle && <p>{subtitle}</p>}
                    </div>
                )}
                <div className="tb-faq-list">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div className={`tb-faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
                                <button
                                    type="button"
                                    className="tb-faq-question"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                >
                                    <span>{item.question}</span>
                                    <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} aria-hidden="true" />
                                </button>
                                <div className="tb-faq-answer" id={`faq-answer-${index}`} role="region">
                                    <div>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
