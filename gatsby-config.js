module.exports = {
  siteMetadata: {
    title: `Automation Zone`,
    name: `Auto Zone`,
    siteUrl: `https://autozee.io`,
    description: `DevSecOps and Automation`,
    hero: {
      heading: `Elegant DevOps, Automation, Cybersecurity, IOT and Coding tutorials`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Nalexgee1`,
      },
      {
        name: `github`,
        url: `https://github.com/Shiaondo-Orkuma`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/orkuma-shiaondo-6528b7124`,
      },
      {
        name: `stackoverflow`,
        url: `https://stackoverflow.com/users/13055269/shiaondo-orkuma`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
