import React from "react"
import { Link } from "gatsby"
const Header = ({ siteTitle }) => (
  <header>
    <h1>Saeed Alsharqawi</h1>
    <nav>
      <ul>
        <li><a><Link to="/">Home</Link></a></li>
        <li><a><Link to="/blog">Blog</Link></a></li>
        <li><a><Link to="/about">About</Link></a></li>
        <li><a><Link to="/contact">Contact</Link></a></li>
      </ul>
    </nav>
  </header>
)
export default Header
