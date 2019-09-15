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
          <li><Link className={headerStyle.navItem} to="/">Home</Link></li>
          <li><Link className={headerStyle.navItem} to="/blog">Blog</Link></li>
          <li><Link className={headerStyle.navItem} to="/about">About</Link></li>
          <li><Link className={headerStyle.navItem} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>);
}
export default Header
