module.exports = {
  siteMetadata: {
    title: `Reactive Marketing`,
    description: `Your complete digital solutions ally!`,
    author: `@gatsbyjs`,
    info: {
      // contact: "+1-905-267-5595",
      contact: "+1-778-402-2950",
      email: "help@reactivemarketing.ca",
    },
    nav: {
      logo: {
        title: "Reactive Marketing",
      },
      menu: {
        items: [
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Services",
            href: "/services",
            items: [
              {
                title: "Research & Planning",
                href: "/research-and-planning",
              },
              {
                title: "Technology & Data Science",
                href: "/technology-and-data-science",
              },
              {
                title: "Branding & Marketing",
                href: "/branding-and-marketing",
              },
              {
                title: "Creativity & Design",
                href: "/creativity-and-design",
              },
            ],
          },
          {
            title: "Work",
            href: "/portfolio",
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
              title: "Work",
              href: "/portfolio",
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
          title: "Services",
          items: [
            {
              title: "Research & Planning",
              href: "/research-and-planning",
            },
            {
              title: "Tech & Data Science",
              href: "/technology-and-data-science",
            },
            {
              title: "Marketing",
              href: "/branding-and-marketing",
            },
            {
              title: "Creativity & Design",
              href: "/creativity-and-design",
            },
            // {
            //   title: "Contact",
            //   href: "/contact",
            // },
          ],
        },
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
