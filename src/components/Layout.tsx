import React from 'react'
import type { FC } from 'react'

// Components
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'

export const Layout: FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
)
