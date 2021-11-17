import type { GatsbyConfig } from 'gatsby'

const Config: GatsbyConfig = {
  siteMetadata: {
    title: `まこと、はと。`,
    description: `プログラム初心者Makoのことを紹介する個人サイトです。`,
    lang: `ja`,
    siteUrl: `https://makohato.com`,
    locale: `ja_JP`,
    fbappid: `280963450158852`,
    author: 'Mako',
    email: 'hal.m.90215@gmail.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
