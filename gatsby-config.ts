import dotenv = require('dotenv')
dotenv.config()

import type { GatsbyConfig } from 'gatsby'

const Config: GatsbyConfig = {
  siteMetadata: {
    title: `まこと、はと。`,
    description: `プログラム初心者Makoのことを紹介する個人サイトです。`,
    lang: `ja`,
    siteUrl: `https://makohato.com`,
    locale: `ja_JP`,
    fbappid: `280963450158852`,
    author: `Mako`,
    email: `hal.m.90215@gmail.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `まこと、はと。`,
        short_name: `まこはと`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/assets/images/makohato_icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
        documentPaths: [`src/**/*.{ts,tsx}`, `gatsby-*.ts`]
      }
    }
  ]
}

export default Config
