import React from 'react'
import type { FC } from 'react'

// Containers
import { Seo } from '../containers/Seo'
import { Layout } from '../containers/Layout'

// Types
type PageProps = {
  location: Location
}

const NotFound: FC<PageProps> = ({ location }) => {
  return (
    <Layout>
      <Seo pagetitle="ページが見つかりません。" pagepath={location.pathname} />
      <h2>ページが見つかりません</h2>
    </Layout>
  )
}

export default NotFound
