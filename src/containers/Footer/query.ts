import { graphql, useStaticQuery } from 'gatsby'

export const UseFooterQuery = () => {
  const data = useStaticQuery<GatsbyTypes.FooterQuery>(graphql`
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
