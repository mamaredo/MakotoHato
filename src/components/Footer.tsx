import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

// SCSS
import '../assets/styles/Layout/l-Footer.scss'

export const Footer: FC = () => (
  <footer>
    <p>&copy; John Doe</p>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="mailto:doe@example.com">Contact</a>
      </li>
    </ul>
  </footer>
)
