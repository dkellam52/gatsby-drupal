module.exports = {
  siteMetadata: {
    title: "Dominique's First Gatsby Site",
    author: "did you forget to add me",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-nodejs",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx", 
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "drupal",
        fieldName: "Drupal",
        url: "https://csc496f22demo.tldr.dev/graphql"
      }
    }  
  ],
};