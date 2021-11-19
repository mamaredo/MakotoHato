import React from 'react'
import type { FC } from 'react'

// Containers
import { Seo } from '../containers/Seo'
import { Layout } from '../containers/Layout'

// Types
import type { ArticlesPageQuery } from '../../types/graphql-types'

type PageProps = {
  data: ArticlesPageQuery
}

const Articles: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Seo />
      {/* タイトルの出力 */}
      <h1>{data.contentfulArticles?.title}</h1>

      {/* 記事作成日の出力 */}
      <time dateTime={data.contentfulArticles?.createdArticleDate}>
        {data.contentfulArticles?.createdArticleDateJP}
      </time>

      {/* カテゴリーの出力 */}
      <ul>
        {data.contentfulArticles?.category?.map(category => (
          <li
            className={category?.categorySlug ?? undefined}
            key={category?.id}
          >
            {category?.category}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default Articles
