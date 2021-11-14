import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// SCSS
import '../../assets/styles/Layout/_Header.scss'

// Query
import { UseHeaderComponentQuery } from './query'

export const Header: FC = () => {
  const data = UseHeaderComponentQuery()

  return (
    <header>
      <h1>
        <Link to="/">{data.site?.siteMetadata?.title ?? '(無題)'}</Link>
      </h1>
    </header>
  )
}
