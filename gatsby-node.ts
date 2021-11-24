import path from 'path'
import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions

  const blogresult = await graphql<GatsbyTypes.ArticlesTemplateQuery>(`
    query {
      allContentfulArticles(sort: { fields: createdArticleDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました。`)
    return
  }

  blogresult.data?.allContentfulArticles.edges.forEach(({ node }) => {
    const slug = node.slug
    createPage({
      path: `/blog/articles/${node.slug}`,
      component: path.resolve(`./src/templates/ArticlesTemplates.tsx`),
      context: { slug }
    })
  })
}
