import { Link } from "gatsby";
import React from "react";
import CtaBanner from "../common/CtaBanner";
import PageHero from "../common/PageHero";
import { whatsappLink } from "../../content/site";

export default function Article({ category, title, intro, date, readingTime, children }) {
    return (
        <>
            <PageHero compact eyebrow={`Blog · ${category}`} title={title} intro={intro}>
                <Link className="tb-btn tb-btn--ghost" to="/blog">
                    <i className="fas fa-arrow-left" aria-hidden="true" />
                    Voltar para o blog
                </Link>
                <span className="tb-article__meta" style={{ marginBottom: 0 }}>
                    <i className="far fa-calendar" aria-hidden="true" /> {date}
                    <i className="far fa-clock" aria-hidden="true" /> {readingTime}
                </span>
            </PageHero>

            <div className="container-custom">
                <article className="tb-article">{children}</article>
            </div>

            <CtaBanner
                eyebrow="Quer ir além?"
                title="Transforme informação em acompanhamento"
                text="Ler ajuda, mas mudar hábitos com apoio é diferente. Se você quer um plano possível para a sua rotina, vamos conversar."
            >
                <a
                    className="tb-btn tb-btn--green"
                    href={whatsappLink("Olá, Thaís! Li um artigo no blog e quero saber mais sobre o acompanhamento.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Falar com a Thaís
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/acompanhamento-nutricional">
                    Ver o acompanhamento
                </Link>
            </CtaBanner>
        </>
    );
}
