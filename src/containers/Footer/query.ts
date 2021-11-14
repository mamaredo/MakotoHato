import { graphql, useStaticQuery } from 'gatsby'

import { FooterComponentQuery } from '../../../types/graphql-types'

export const UseFooterComponentQuery = () => {
  const data = useStaticQuery<FooterComponentQuery>(graphql`
    query FooterComponent {
      site {
        siteMetadata {
          author
          email
        }
      }
    }
  `)
  return data
}
