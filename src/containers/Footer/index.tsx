import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// SCSS
import '../../assets/styles/Layout/_Footer.scss'

// Query
import { UseFooterQuery } from './query'

export const Footer: FC = () => {
  const data = UseFooterQuery()

  return (
    <footer>
      <p>&copy; {data.site?.siteMetadata?.author ?? '(著者未設定)'}</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href={`mailto:${data.site?.siteMetadata?.email ?? ''}`}>Contact</a>
        </li>
      </ul>
    </footer>
  )
}
