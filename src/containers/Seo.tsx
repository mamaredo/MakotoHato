import React from 'react'
import type { FC } from 'react'
import { Helmet } from 'react-helmet'

export const Seo: FC = () => {
  return (
    <Helmet>
      <html lang="ja" />
      <title>タイトル</title>
      <meta name="description" content="説明" />
    </Helmet>
  )
}
