import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// Containers
import { Seo } from '../containers/Seo'
import { Layout } from '../containers/Layout'

// Types
import type { AboutPageQuery } from '../../types/graphql-types'

type PageProps = {
  data: AboutPageQuery
  location: Location
}

const About: FC<PageProps> = ({ data, location }) => {
  return (
    <Layout>
      <Seo
        pagetitle="まこについて"
        pagedesc="プログラム初心者まこについての紹介ページです。"
        pagepath={location.pathname}
      />
      <h1>About {data.site?.siteMetadata?.title ?? '(無題)'}</h1>
      <p>GatsbyJSでできたブログやよ〜</p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About
