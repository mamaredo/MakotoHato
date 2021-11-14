import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// Components
import { Layout } from '../components/Layout'

// SCSS
import '../assets/styles/Foundation/_base.scss'
import '../assets/styles/index.scss'

const Home: FC = () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello, GatsbyJS!</p>
    <Link to="/about">About this blog</Link>
  </Layout>
)
export default Home