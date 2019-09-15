import React from "react"
import Footer from '../components/footer';
import Header from '../components/header';
import layotStyles from './layout.module.scss'
const Layout = (props) => {
  return (
    <div className={layotStyles.container}>
      <div className={layotStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
