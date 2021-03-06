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

  const lang = data.site?.siteMetadata?.lang

  const title = data.site?.siteMetadata?.title

  const pagetitle = props.pagetitle
    ? `${props.pagetitle} | ${data.site?.siteMetadata?.title}`
    : data.site?.siteMetadata?.title

  const description = props.pagedesc || data.site?.siteMetadata?.description

  const url = props.pagepath
    ? `${data.site?.siteMetadata?.siteUrl}${props.pagepath}`
    : data.site?.siteMetadata?.siteUrl

  const locale = data.site?.siteMetadata?.locale

  const fbappid = data.site?.siteMetadata?.fbappid

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pagetitle}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={pagetitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="fb:app_id" content={fbappid} />
    </Helmet>
  )
}
