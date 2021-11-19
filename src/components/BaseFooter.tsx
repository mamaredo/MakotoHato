import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// SCSS
import '../assets/styles/Layout/_Footer.scss'

type Props = {
  siteTitle: string | undefined
}

export const BaseFooter: FC<Props> = (props: Props) => {
  const { siteTitle } = props
  return (
    <footer>
      <p>&copy; 2021 {siteTitle} </p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  )
}
