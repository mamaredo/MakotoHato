import React from 'react'
import type { FC } from 'react'

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image'

// Containers
import { Seo } from '../containers/Seo'
import { Layout } from '../containers/Layout'

// Query
import { UseArticlesPageQuery } from '../PageQuery/articlesQuery'

const Articles: FC = () => {
  const data = UseArticlesPageQuery()

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
      {/* 画像の表示 */}
      <GatsbyImage
        image={data.contentfulArticles?.eyecatch?.gatsbyImageData}
        alt={data.contentfulArticles?.eyecatch?.description ?? ''}
      />
    </Layout>
  )
}
export default Articles
