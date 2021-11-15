import React from 'react'
import type { FC } from 'react'
import { graphql, Link } from 'gatsby'

// Components
import { Layout } from '../components/Layout'

// Containers
import { Seo } from '../containers/Seo'

// Types
import type { AboutPageQuery } from '../../types/graphql-types'

interface PageProps {
  data: AboutPageQuery
}

const About: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <h1>About {data.site?.siteMetadata?.title ?? '(無題)'}</h1>
      <p>GatsbyJSでできたブログやよ〜</p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About

// Query
export const query = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
