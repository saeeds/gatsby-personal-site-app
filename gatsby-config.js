const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Said Alsharqawi Personal Site`,
    description: `Explore awsome said alsharqawi perosanl web site`,
    author: `@Saeed Alsharqawi`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
  ],
}
