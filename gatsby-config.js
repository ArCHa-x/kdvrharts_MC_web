module.exports = {
  siteMetadata: {
    title: `Kdvrharts MC Server`,
    description: `Yet another MC Modded Server with version 1.12.2`,
    author: `@SomioNaArashi`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#EE8262",
        },
        productionPrefix: "MUI_",
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
