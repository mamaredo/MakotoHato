import dotenv = require('dotenv')
dotenv.config()

import type { GatsbyConfig } from 'gatsby'
import './src/__generated__/gatsby-types'

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
    `gatsby-plugin-typegen`,
    `gatsby-plugin-image`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    }
  ]
}

export default Config
