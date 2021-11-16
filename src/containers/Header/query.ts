import { graphql, useStaticQuery } from 'gatsby'

import type { HeaderQuery } from '../../../types/graphql-types'

export const UseHeaderQuery = () => {
  const data = useStaticQuery<HeaderQuery>(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data
}
