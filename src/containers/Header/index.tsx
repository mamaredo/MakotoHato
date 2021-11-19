import React from 'react'
import type { FC } from 'react'

// Component
import { BaseHeader } from '../../components/BaseHeader'

// Query
import { UseHeaderQuery } from './query'

export const Header: FC = () => {
  const data = UseHeaderQuery()

  const siteTitle = data.site?.siteMetadata?.title ?? undefined

  return <BaseHeader siteTitle={siteTitle} />
}
