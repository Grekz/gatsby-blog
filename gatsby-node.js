const path = require('path')

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        resolve(
            graphql(`
                {
                    allContentfulPost(limit:100) {
                        edges {
                            node {
                                id
                                slug
                            }
                        }
                    }
                }
            `).then((result) => {
                if ( result.errors ) {
                    reject(result.errors)
                }
                console.log(result.data.allContentfulPost.edges)
                result.data.allContentfulPost.edges.forEach( ({node}) => {
                    createPage( {
                        path: node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: node.slug
                        }
                    })
                });
                return 
            })
        )
    })
}