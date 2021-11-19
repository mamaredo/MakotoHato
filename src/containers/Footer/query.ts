import { graphql, useStaticQuery } from 'gatsby'

import type { FooterQuery } from '../../../types/graphql-types'

export const UseFooterQuery = () => {
  const data = useStaticQuery<FooterQuery>(graphql`
    query Footer {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data
}
