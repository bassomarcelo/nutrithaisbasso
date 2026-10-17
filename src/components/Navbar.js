import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { INSTAGRAM, NAV_LINKS, SOCIAL_LINKS, whatsappLink } from "../content/site";
import "./Navbar.css";

export default function Navbar(props) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [path, setPath] = useState("");

    useEffect(() => {
        setPath(window.location.pathname);

        const handleScroll = () => setScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("tb-nav-open", open);

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.classList.remove("tb-nav-open");
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    const isActive = (to) => (to === "/" ? path === "/" : path.startsWith(to));

    return (
        <>
            <nav className={`navbar tb-navbar fixed-top ${scrolled ? "is-scrolled" : ""} ${props.page || ""}`.trim()} aria-label="Navegação principal">
                <div className="container-custom tb-navbar-inner">
                    <Link to="/" className="tb-navbar-brand" aria-label="Página inicial - Thaís Basso">
                        <img src="/icons/logo-with-name.png" alt="Thaís Basso Nutricionista" />
                    </Link>

                    <button
                        type="button"
                        className={`tb-navbar-toggle ${open ? "is-open" : ""}`}
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={open}
                        aria-controls="menu-principal"
                        onClick={() => setOpen((value) => !value)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <div id="menu-principal" className={`tb-navbar-menu ${open ? "is-open" : ""}`.trim()}>
                        <ul className="tb-navbar-links">
                            {NAV_LINKS.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className={`tb-navbar-link ${isActive(link.to) ? "is-active" : ""}`.trim()}
                                        aria-current={isActive(link.to) ? "page" : undefined}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="tb-navbar-menu-footer">
                            <a
                                className="tb-btn tb-btn--whatsapp tb-navbar-menu-cta"
                                href={whatsappLink()}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setOpen(false)}
                            >
                                <i className="fab fa-whatsapp" aria-hidden="true" />
                                Agendar consulta
                            </a>
                            <div className="tb-navbar-menu-social">
                                {SOCIAL_LINKS.map((social) => (
                                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                                        <i className={`fab ${social.icon}`} aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="tb-navbar-actions">
                        <a className="tb-navbar-social" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram da Thaís Basso">
                            <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                        <a className="tb-btn tb-btn--primary tb-navbar-cta" href={whatsappLink()} target="_blank" rel="noreferrer">
                            Agendar consulta
                        </a>
                    </div>
                </div>
            </nav>

            <button
                type="button"
                className={`tb-navbar-overlay ${open ? "is-visible" : ""}`.trim()}
                aria-label="Fechar menu"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
            />
        </>
    );
}
