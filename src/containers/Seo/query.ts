import { graphql, useStaticQuery } from 'gatsby'

import type { SeoQuery } from '../../../types/graphql-types'

export const UseSeoQuery = () => {
  const data = useStaticQuery<SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          lang
          description
        }
      }
    }
  `)
  return data
}
