import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// SCSS
import '../assets/styles/Layout/_Header.scss'

type Props = {
  siteTitle: string | undefined
}

export const BaseHeader: FC<Props> = (props: Props) => {
  const { siteTitle } = props
  return (
    <header>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  )
}
