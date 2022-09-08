module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `ITDEV-164 Gatsby Blog.`,
    author: `Brent Baumgart`,
    contact: {
      name: `Brent Baumgart`,
      company: `Blogs Inc.`,
      address: `PO box 1111`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve:`gatsby-source-contentful`,
      options: {
        spaceId: `q1xxzf1yzmyw`,
        accessToken: `RzGs1-XTNXQn7gYQ262PNtMBGYfDOo09gel4DaZQRfg`
      }
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
