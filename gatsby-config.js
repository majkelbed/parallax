module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@img": "src/img",
          "@components": "src/components",
          "@pages": "src/pages",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
