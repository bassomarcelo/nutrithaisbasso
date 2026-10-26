/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// Builds with DEMO=1 are published to demo.thaisbasso.com: no sitemap,
// robots.txt blocking everything and a noindex meta tag on every page.
const isDemo = process.env.DEMO === "1";
const domain = isDemo ? "demo.thaisbasso.com" : "thaisbasso.com";
const siteUrl = `https://${domain}`;

module.exports = {
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `./src/fonts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `./src/`,
            },
        },
        "gatsby-plugin-react-svg",
        ...(isDemo
            ? []
            : [
                  {
                      resolve: `gatsby-plugin-sitemap`,
                      options: {
                          query: `
                              {
                                  site {
                                      siteMetadata {
                                          siteUrl
                                      }
                                  }
                                  allSitePage {
                                      nodes {
                                          path
                                          pageContext
                                      }
                                  }
                              }
                          `,
                          serialize: ({ path, pageContext }) => {
                              return {
                                  url: path,
                                  lastmod: pageContext?.lastMod,
                              };
                          },
                      },
                  },
              ]),
        `gatsby-plugin-git-lastmod`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: isDemo
                ? {
                      policy: [{ userAgent: '*', disallow: '/' }],
                      host: null,
                      sitemap: null,
                  }
                : {
                      host: 'https://thaisbasso.com',
                      sitemap: 'https://thaisbasso.com/sitemap-0.xml',
                      policy: [{ userAgent: '*', allow: '/' }],
                  },
        },
        'gatsby-plugin-cname'
    ],

    siteMetadata: {
        title: "Thaís Basso | Nutricionista Comportamental",
        description:
            "Nutricionista funcional e comportamental. Acompanhamento nutricional para hábitos reais, com saúde sem dieta, sem culpa e sem perfeição. Presencial em Carlos Barbosa/RS e online.",
        canonical: siteUrl,
        siteUrl: siteUrl,
        isDemo: isDemo,
        author: "bassomarcelo",
    },
};