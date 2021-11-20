import { graphql, useStaticQuery } from 'gatsby'

export const UseSeoQuery = () => {
  const data = useStaticQuery<GatsbyTypes.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          lang
          description
          siteUrl
          locale
          fbappid
        }
      }
    }
  `)
  return data
}
