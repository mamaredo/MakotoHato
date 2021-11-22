import React from 'react'
import type { FC } from 'react'

// Gatsby
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// Contentful
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData
} from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'

// Containers
import { Seo } from '../containers/Seo'
import { Layout } from '../containers/Layout'

// Query
import { UseArticlesPageQuery } from '../query/templatesQuery/ArticlesQuery'

const Articles: FC = () => {
  const data = UseArticlesPageQuery()

  const articleTitle = data.contentfulArticles?.title

  const articleCreateDate = data.contentfulArticles?.createdArticleDate
  const articleCreateDateJP = data.contentfulArticles?.createdArticleDateJP

  const eyecatchImageData = data.contentfulArticles?.eyecatch
    ?.gatsbyImageData as unknown as IGatsbyImageData

  const eyecatchImageDescription =
    data.contentfulArticles?.eyecatch?.description ?? ''

  const articleContent = data.contentfulArticles
    ?.article as unknown as RenderRichTextData<ContentfulRichTextGatsbyReference>

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: {
        data: {
          target: {
            gatsbyImageData: IGatsbyImageData
            description: string
            title: string
          }
        }
      }) => (
        <GatsbyImage
          image={node.data.target.gatsbyImageData}
          alt={
            node.data.target.description
              ? node.data.target.description
              : node.data.target.title
          }
        />
      )
    }
  } as unknown as Options

  return (
    <Layout>
      <Seo />
      {/* タイトルの出力 */}
      <h1>{articleTitle}</h1>

      {/* 記事作成日の出力 */}
      <time dateTime={articleCreateDate}>{articleCreateDateJP}</time>

      {/* カテゴリーの出力 */}
      <ul>
        {data.contentfulArticles?.category?.map(category => (
          <li className={category?.categorySlug} key={category?.id}>
            {category?.category}
          </li>
        ))}
      </ul>
      {/* 画像の表示 */}

      <GatsbyImage image={eyecatchImageData} alt={eyecatchImageDescription} />

      {/* 記事のテキストを表示 */}
      <div>{renderRichText(articleContent, options)}</div>
    </Layout>
  )
}
export default Articles
