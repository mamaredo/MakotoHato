import React from 'react'
import type { FC } from 'react'

// Components
import { Layout } from '../components/Layout'

// Containers
import { Seo } from '../containers/Seo'

// Types
interface Props {
  location: Location
}

const NotFound: FC<Props> = ({ location }) => {
  return (
    <Layout>
      <Seo pagetitle="ページが見つかりません。" pagepath={location.pathname} />
      <h2>ページが見つかりません</h2>
    </Layout>
  )
}

export default NotFound
