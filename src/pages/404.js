import { Link } from "gatsby";
import React from "react";
import Layout from "../components/common/Layout";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import "../styles/404.css";

export default function NotFound() {
    return (
        <Layout>
            <section className="tb-not-found">
                <div className="container-custom">
                    <Reveal className="tb-not-found-inner">
                        <span className="tb-eyebrow">Erro 404</span>
                        <p className="tb-not-found-code" aria-hidden="true">
                            404
                        </p>
                        <h1>Página não encontrada</h1>
                        <p className="tb-lead">O link pode ter mudado ou a página não existe mais. Vamos voltar para um lugar conhecido?</p>
                        <div className="tb-actions tb-actions--center">
                            <Link className="tb-btn tb-btn--primary" to="/">
                                Voltar para a página inicial
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </Link>
                            <Link className="tb-btn tb-btn--ghost" to="/contato">
                                Falar com a Thaís
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </Layout>
    );
}

export const Head = () => <Seo path="/404" title="Página não encontrada | Thaís Basso" description="A página que você procura não foi encontrada." />;
