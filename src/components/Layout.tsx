import React from 'react'
import type { FC } from 'react'

// Component
import { Header } from '../containers/Header/Header'
import { Footer } from '../containers/Footer/Footer'

export const Layout: FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
)
