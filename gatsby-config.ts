import type { GatsbyConfig } from 'gatsby'

const Config: GatsbyConfig = {
  siteMetadata: {
    title: 'Makoと、まこ。',
    author: 'Makotty',
    description: 'プログラム初心者Makoのブログ兼ポートフォリオサイトです。',
    email: 'hal.m.90215@gmail.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
      }
    }
  ]
}

export default Config
