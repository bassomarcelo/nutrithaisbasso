import React from "react";
import Reveal from "../common/Reveal";
import "./Promise.css";

const PROMISES = [
    {
        icon: "fa-redo",
        title: "Sair do ciclo",
        text: "Restrição, culpa, recomeço. Hábitos não mudam na força; mudam quando o caminho faz sentido para a sua vida.",
    },
    {
        icon: "fa-utensils",
        title: "Comer sem medo",
        text: "Nenhum grupo alimentar é proibido. Você aprende combinações, porções e trocas que sustentam escolhas melhores.",
    },
    {
        icon: "fa-clock",
        title: "No seu tempo",
        text: "A rotina de quem trabalha, cuida da casa e da família também cabe no plano. Ajustamos o possível, sem perfeição.",
    },
];

export default function Promise() {
    return (
        <section className="tb-promise tb-section tb-section--lavender" id="promessa">
            <div className="container-custom">
                <div className="tb-promise-grid">
                    <Reveal className="tb-promise-copy">
                        <span className="tb-eyebrow">Uma nova relação com a comida</span>
                        <h2>Você não precisa de mais uma dieta.</h2>
                        <p className="tb-lead">
                            Você já tentou seguir um cardápio perfeito, cortar tudo o que gosta e começar de novo na segunda-feira. O problema nunca foi falta de
                            força de vontade. É que o método não foi feito para a vida real.
                        </p>
                        <p>
                            Aqui, saúde é construída com comportamento, não com punição. Menos regras impossíveis, mais consciência, autonomia e escolhas que você
                            consegue manter.
                        </p>

                        <div className="tb-promise-cycle" aria-label="Ciclo de restrição e recomeço que a nutrição comportamental ajuda a interromper">
                            <span>restrição</span>
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                            <span>culpa</span>
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                            <span>recomeço</span>
                            <i className="fas fa-times" aria-hidden="true" />
                        </div>

                        <blockquote className="tb-promise-quote">
                            “O objetivo não é comer perfeito. É comer melhor com a vida que você tem.”
                        </blockquote>
                    </Reveal>

                    <div className="tb-promise-cards">
                        {PROMISES.map((item, index) => (
                            <Reveal className="tb-promise-card" key={item.title} delay={index * 90}>
                                <span className="tb-icon-bubble">
                                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
