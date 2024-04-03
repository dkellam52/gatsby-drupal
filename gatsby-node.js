const path = require('path');


//create a slug for each recipe and set it as the field on the node.
exports.onCreateNode = ({node, getNode, actions}) => {
    //consel.log(node);
    const { createNodeField } = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : 'node' + node.drupal_id;
    createNodeField({
        node,
        name: 'slug',
        value: slug,
    })
}

// Implement the Gatsby API "createPages". This is called once the 
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const articleTemplate = path.resolve('src/pages/article.js')
        const recipeTemplate = path.resolve('src/pages/recipe.js')

        // page building queries
        resolve(
            graphql(
                `
query MyQuery {
    Drupal {
        nodeRecipes(first: 10) {
            edges {
                node {
                    changed
                    id
                    cookingTime
                    created
                    path
                    status
                    title
                    preparationTime
                    numberOfServings
                    recipeInstruction {
                        format
                        processed
                        value
                    }
                    ingredients
                    difficulty
                    mediaImage {
                        id
                        mediaImage {
                            url
                            width
                            height
                        }
                    }
                }
            }
        }
        nodeArticles(first: 10) {
            nodes {
                title
                author {
                    displayName
                    id
                }
                body {
                    value
                }
                changed
                created
                id
            }
        }
    }
}                
`
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }
                // create recipe pages
                console.log("RECIPE PAGES");
                console.log(result.data.Drupal.nodeRecipes);
                const recipePages = result.data.Drupal.nodeRecipes.edges;
                recipePages.forEach(({ node }, index) => {
                    console.log("RECIPE PATH: ");
                    console.log(node.path);
                    const page_path = node.path
                    console.log(page_path);
                    console.log(node);
                        actions.createPage({
                        path: `${page_path}`,
                        component: recipeTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })
                // create article pages
                const articles = result.data.Drupal.nodeArticles.nodes;
                articles.forEach(article => {
                    const pagePath = `/article/${article.id}`;
                    createPage({
                        path: pagePath,
                        component: articleTemplate,
                        context: {
                            data: article, // pass the article object directly
                        },
                    });
                });
            })
        )
    });
}