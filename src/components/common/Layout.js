import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { whatsappLink } from "../../content/site";
import "../../fontawesome-free-6.2.1-web/css/all.min.css";
import "../../styles/style.css";
import "../../styles/pages.css";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame = null;

        const update = () => {
            const root = document.documentElement;
            const scrollable = root.scrollHeight - root.clientHeight;
            setProgress(scrollable > 0 ? Math.min(1, root.scrollTop / scrollable) : 0);
            frame = null;
        };

        const handleScroll = () => {
            if (frame === null) frame = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    return <div className="tb-scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}

export default function Layout(props) {
    return (
        <>
            <ScrollProgress />
            <Navbar page={props.page || ""} />
            <div className="filler" style={{ display: "block", height: "86px" }} aria-hidden="true" />
            <main className={`page-content ${props.page || ""}`}>{props.children}</main>
            <Footer />
            <a className="tb-whatsapp-float" href={whatsappLink()} target="_blank" rel="noreferrer" data-label="Falar no WhatsApp" aria-label="Falar com a Thaís no WhatsApp">
                <i className="fab fa-whatsapp" aria-hidden="true" />
            </a>
        </>
    );
}
