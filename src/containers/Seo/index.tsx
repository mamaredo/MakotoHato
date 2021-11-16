import React from 'react'
import type { FC } from 'react'
import { Helmet } from 'react-helmet'

// Query
import { UseSeoQuery } from './query'

export const Seo: FC = () => {
  const data = UseSeoQuery()

  return (
    <Helmet>
      <html lang={data.site?.siteMetadata?.lang ?? 'ja'} />
      <title>{data.site?.siteMetadata?.title}</title>
      <meta
        name="description"
        content={
          data.site?.siteMetadata?.description ??
          'プログラム初心者Makoのことを紹介する個人サイトです。'
        }
      />
    </Helmet>
  )
}
