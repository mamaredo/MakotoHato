import { graphql, useStaticQuery } from 'gatsby'
import type { ArticlesPageQuery } from 'types/graphql-types'

export const UseArticlesPageQuery = () => {
  const data = useStaticQuery<ArticlesPageQuery>(graphql`
    query ArticlesPage {
      contentfulArticles {
        title
        createdArticleDateJP: createdArticleDate(formatString: "YYYY年MM月DD日")
        createdArticleDate
        category {
          category
          categorySlug
          id
        }
        eyecatch {
          gatsbyImageData
          description
          file {
            details {
              image {
                width
                height
              }
            }
            url
          }
        }
      }
    }
  `)
  return data
}
