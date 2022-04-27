const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            id
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/publication/'+ node.frontmatter.id,
      component: path.resolve('./src/templates/publication-details.jsx'),
      context: { id: node.frontmatter.id }
    })
  })

}