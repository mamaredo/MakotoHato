import React from 'react'
import type { FC } from 'react'

// Component
import { BaseFooter } from '../../components/BaseFooter'

// Query
import { UseFooterQuery } from './query'

export const Footer: FC = () => {
  const data = UseFooterQuery()

  const siteTitle = data.site?.siteMetadata?.title

  return <BaseFooter siteTitle={siteTitle} />
}
