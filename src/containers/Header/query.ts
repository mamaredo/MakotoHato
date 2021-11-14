import { graphql, useStaticQuery } from 'gatsby'

import type { HeaderComponentQuery } from '../../../types/graphql-types'

export const UseHeaderComponentQuery = () => {
  const data = useStaticQuery<HeaderComponentQuery>(graphql`
    query HeaderComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data
}
