import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// Component
import { Layout } from '../components/Layout'

const About: FC = () => (
  <Layout>
    <h1>About</h1>
    <p>GatsbyJSでできたブログやよ〜</p>
    <Link to="/">Home</Link>
  </Layout>
)
export default About
