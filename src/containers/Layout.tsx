import React from 'react'
import type { FC } from 'react'

// Containers
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
)
