import React, { useEffect, useRef, useState } from "react";

/**
 * Anima a entrada dos blocos quando eles aparecem na tela.
 * Respeita prefers-reduced-motion através do CSS.
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, style, ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
            style={{ ...(delay ? { transitionDelay: `${delay}ms` } : {}), ...style }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
