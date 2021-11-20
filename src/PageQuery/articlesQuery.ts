import { graphql, useStaticQuery } from 'gatsby'

export const UseArticlesPageQuery = () => {
  const data = useStaticQuery<GatsbyTypes.ArticlesPageQuery>(graphql`
    query ArticlesPage {
      contentfulArticles {
        title
        article {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              gatsbyImageData(layout: FULL_WIDTH)
              title
              description
            }
          }
        }
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
