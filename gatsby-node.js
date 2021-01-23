/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(
    `
      {
        allProjectsJson {
          edges {
            node {
              slug
              id
              image {
                publicURL
              }
            }
          }
        }
      }
    `
  )

  if (result.error) {
    reporter.panic("Problem Loading Project")
    return
  }

  const projects = result.data.allProjectsJson.edges

  projects.forEach(({ node: project }) => {
    const { slug, id, image } = project

    actions.createPage({
      path: `/${slug}`,
      component: require.resolve("./src/components/Projects/ProjectDetail.jsx"),
      context: {
        slug,
        image,
      },
    })
  })
}
