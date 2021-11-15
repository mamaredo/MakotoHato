import React from 'react'
import type { FC } from 'react'

// Components
import { Layout } from '../components/Layout'

// Containers
import { Seo } from '../containers/Seo'

const NotFound: FC = () => {
  return (
    <Layout>
      <Seo />
      <h2>ページが見つかりません</h2>
    </Layout>
  )
}

export default NotFound
