module.exports = {
  siteMetadata: {
    title: `Ahmed Boutaraa`,
    description: `Personal Website`,
    author: `Ahmed Boutaraa`,
    image: "./src/images/logo2.svg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skill`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mailgo`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ahmed Boutaraa`,
        short_name: `AHMED`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#031a6b`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_ID,
        head: true,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
