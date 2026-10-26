import { Link } from "gatsby";
import React from "react";
import { ADDRESS, EMAIL, PHONE_DISPLAY, SOCIAL_LINKS, whatsappLink } from "../content/site";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="tb-footer">
            <div className="container-custom">
                <div className="tb-footer-top">
                    <div className="tb-footer-column">
                        <h3>Navegue</h3>
                        <ul>
                            <li>
                                <Link to="/">Início</Link>
                            </li>
                            <li>
                                <Link to="/metodo-seja-real-nao-perfeito">Método Seja Real, Não Perfeito</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre a Thaís</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="tb-footer-column">
                        <h3>Serviços</h3>
                        <ul>
                            <li>
                                <Link to="/consultoria-nutricional-online">Consultoria Online – 30 dias</Link>
                            </li>
                        </ul>
                        <div className="tb-footer-social">
                            {SOCIAL_LINKS.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                                    <i className={`fab ${social.icon}`} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="tb-footer-column tb-footer-contact">
                        <h3>Onde me encontrar</h3>
                        <p>
                            {ADDRESS.street}
                            <br />
                            {ADDRESS.building}
                            <br />
                            {ADDRESS.city}
                        </p>
                        <p>
                            <a href={whatsappLink()} target="_blank" rel="noreferrer">
                                <i className="fab fa-whatsapp" aria-hidden="true" /> {PHONE_DISPLAY}
                            </a>
                        </p>
                        <p>
                            <a href={`mailto:${EMAIL}`}>
                                <i className="far fa-envelope" aria-hidden="true" /> {EMAIL}
                            </a>
                        </p>
                        <p>
                            <a href={ADDRESS.maps} target="_blank" rel="noreferrer">
                                <i className="fas fa-map-marker-alt" aria-hidden="true" /> Ver no mapa
                            </a>
                        </p>
                    </div>
                </div>

                <div className="tb-footer-bottom">
                    <span>© {new Date().getFullYear()} Thaís Basso. Todos os direitos reservados.</span>
                    <span>
                        Feito com <i className="fas fa-heart tb-footer-heart" aria-hidden="true" /> por{" "}
                        <a href="https://www.instagram.com/lucasschueitzer" target="_blank" rel="noreferrer">
                            Lucas
                        </a>{" "}
                        e{" "}
                        <a href="https://github.com/bassomarcelo" target="_blank" rel="noreferrer">
                            Marcelo
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
