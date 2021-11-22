import { graphql, useStaticQuery } from 'gatsby'

export const UseAboutPageQuery = () => {
  const data = useStaticQuery<GatsbyTypes.AboutPageQuery>(graphql`
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
