require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `EASY WORK FROM HOME`,
    description: `WORK FROM THE COMFORT OF YOUR HOME... MAKE BIG PROFITS!`,
    author: `@gatsbyjs`,
    info: {
      // contact: "+1-905-267-5595",
      contact: "+1-123-456-7890",
      email: "help@easy-workfromhome.com",
    },
    nav: {
      logo: {
        title: "EASY WORK FROM HOME",
      },
      menu: {
        items: [
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Get Started",
            href: "/register",
          },
          {
            title: "Contact",
            href: "/contact",
          },
          {
            title: "Privacy",
            href: "/privacy",
          },
          {
            title: "Terms",
            href: "/terms",
          },
        ],
      },
    },
    footerMenu: {
      items: [
        {
          title: "Links",
          items: [
            {
              title: "Home",
              href: "/",
            },

            {
              title: "Apply Now",
              href: "/register",
            },
            {
              title: "About",
              href: "/about",
            },
            {
              title: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Info",
          items: [
            {
              title: "Privacy",
              href: "/privacy",
            },
            {
              title: "Terms",
              href: "/terms",
            },
          ],
        },
        //
      ],
    },
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
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/index.css"],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-tsconfig-paths`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
