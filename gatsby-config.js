module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@services": "src/services",
          "@utils": "src/utils",
          "@context": "src/context",
          "@hooks": "src/hooks",
          "@helpers": "src/helpers",
          "@assets": "src/assets",
          "@styles": "src/assets/styles",
        },
        extensions: [],
      },
    },
  ],
};
