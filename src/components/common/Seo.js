import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Seo(props) {
    const data = useStaticQuery(graphql`
        query siteMetadata {
            site {
                siteMetadata {
                    title
                    description
                    canonical
                    siteUrl
                    isDemo
                }
            }
        }
    `);

    const { title, description, siteUrl, isDemo } = data.site.siteMetadata;
    const pageTitle = props.title || title;
    const pageDescription = props.description || description;
    const canonical = props.path ? `${siteUrl}${props.path}` : siteUrl;

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {isDemo && <meta name="robots" content="noindex, nofollow" />}
            {!isDemo && <link rel="canonical" href={canonical} />}
            <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
            <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Thaís Basso Nutricionista" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={canonical} />
            <meta property="og:locale" content="pt_BR" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="theme-color" content="#723B5A" />
        </>
    );
}
