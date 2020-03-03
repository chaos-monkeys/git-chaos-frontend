module.exports = {
  siteMetadata: {
    title: "Chaos Monkeys",
    description: "Helping you build better",
    author: "Chaos Monkeys",

    emails: {
      feedback: "feedback@chaosmonkeys.dev",
    },

    sidebar: [
      {
        name: "Predicting chaos",
        url: "/posts/predicting-chaos",
      },
      {
        name: "Posts",
        url: "/posts",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/response/repos/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Chaos Monkeys",
        short_name: "Chaos Monkeys",
        start_url: "/",
        background_color: "#1a1b20",
        theme_color: "#1a1b20",
        display: "minimal-ui",
        icon: "src/images/favicons/favicon.png", // TODO: decide on favicon
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    "gatsby-plugin-scss-typescript",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
