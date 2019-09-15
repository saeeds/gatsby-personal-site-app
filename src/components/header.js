import React from "react";
import { Link } from "gatsby";
import headerStyle from './header.module.scss';
const Header = ({ siteTitle }) => {
  return (
    <header className={headerStyle.header}>
      <h1>
        <Link className={headerStyle.title} to='/'>Saeed Alsharqawi</Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li><a><Link className={headerStyle.navItem} to="/">Home</Link></a></li>
          <li><a><Link className={headerStyle.navItem} to="/blog">Blog</Link></a></li>
          <li><a><Link className={headerStyle.navItem} to="/about">About</Link></a></li>
          <li><a><Link className={headerStyle.navItem} to="/contact">Contact</Link></a></li>
        </ul>
      </nav>
    </header>);
}
export default Header
