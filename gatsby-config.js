/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Jilyan Dy",
    menuLinks: [
      {
        name: "Home",
        link: "/#intro",
      },
      {
        name: "Projects",
        link: "/#projects",
      },
      {
        name: "Education",
        link: "/#education",
      },
      {
        name: "Publications",
        link: "/#publications",
      },
      {
        name: "Contact",
        link: "/#contact",
      },
    ],
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 2000,
        offset: -50,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "dataset",
        path: "./src/data/",
      },
    },
  ],
}
