import React from 'react'
import type { FC } from 'react'
import { Helmet } from 'react-helmet'

// Query
import { UseSeoQuery } from './query'

// Types
interface Props {
  pagetitle?: string
  pagedesc?: string
  pagepath?: string
}

export const Seo: FC<Props> = props => {
  const data = UseSeoQuery()

  const lang = data.site?.siteMetadata?.lang ?? 'ja'

  const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site?.siteMetadata?.title}`
    : data.site?.siteMetadata?.title

  const description =
    (props.pagedesc || data.site?.siteMetadata?.description) ?? ''

  const url = props.pagepath
    ? `${data.site?.siteMetadata?.siteUrl}${props.pagepath}`
    : data.site?.siteMetadata?.siteUrl ?? ''

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />
    </Helmet>
  )
}
