import { graphql, useStaticQuery } from 'gatsby'

export const UseHeaderQuery = () => {
  const data = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
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
