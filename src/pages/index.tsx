import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// Containers
import { Seo } from '../containers/Seo'
import { Layout } from '../containers/Layout'

// SCSS
import '../assets/styles/Foundation/_base.scss'
import '../assets/styles/index.scss'

const Index: FC = () => {
  return (
    <Layout>
      <Seo />
      <h1>Home</h1>
      <p>Hello, GatsbyJS!</p>
      <Link to="/about">About this blog</Link>
    </Layout>
  )
}

export default Index
