import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// SCSS
import '../assets/styles/Layout/l-Header.scss'

export const Header: FC = () => (
  <header>
    <h1>
      <Link to="/">My blog</Link>
    </h1>
  </header>
)
