import { graphql, useStaticQuery } from 'gatsby'

export const UseArticlesTemplateQuery = () => {
  const data = useStaticQuery<GatsbyTypes.ArticlesTemplateQuery>(graphql`
    query ArticlesTemplate {
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
  return data
}
