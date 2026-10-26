import React from "react";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import CtaBanner from "../components/common/CtaBanner";
import Faq from "../components/common/Faq";
import AboutPreview from "../components/home/AboutPreview";
import Hero from "../components/home/Hero";
import MethodSummary from "../components/home/MethodSummary";
import OtherWays from "../components/home/OtherWays";
import Promise from "../components/home/Promise";
import Testimonials from "../components/home/Testimonials";
import { HOME_FAQ, INSTAGRAM, whatsappLink } from "../content/site";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Promise />
            <MethodSummary />
            <OtherWays />
            <Testimonials />
            <AboutPreview />
            <Faq items={HOME_FAQ} title="Perguntas frequentes" subtitle="Se a sua dúvida não estiver aqui, me chame no WhatsApp. Será um prazer conversar." />

            <CtaBanner
                eyebrow="Vamos começar?"
                title="Seu próximo passo pode ser mais leve"
                text="Me conte o que você está buscando. Vamos encontrar juntas um caminho possível para a sua rotina, com saúde e sem culpa."
            >
                <a
                    className="tb-btn tb-btn--green"
                    href={whatsappLink("Olá, Thaís! Quero conversar sobre o atendimento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Falar com a Thaís no WhatsApp
                </a>
                <a className="tb-btn tb-btn--ghost" href={INSTAGRAM} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" aria-hidden="true" />
                    Ver o Instagram
                </a>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/"
        title="Thaís Basso | Nutricionista Comportamental"
        description="Nutrição comportamental individual para hábitos reais. Saúde sem dieta, sem culpa e sem perfeição, presencial em Carlos Barbosa/RS e online."
    />
);
