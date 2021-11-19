import { graphql, useStaticQuery } from 'gatsby'
import type { AboutPageQuery } from 'types/graphql-types'

export const UseAboutPageQuery = () => {
  const data = useStaticQuery<AboutPageQuery>(graphql`
    query AboutPage {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data
}
