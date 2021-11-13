import React from 'react'
import type { FC } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// SCSS
import '../assets/styles/Layout/_Header.scss'

export const Header: FC = () => {
  const data = useStaticQuery(graphql`
    query HeaderComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>
        <Link to="/">My blog</Link>
      </h1>
    </header>
  )
}
