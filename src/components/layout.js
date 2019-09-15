import React from "react"
import Footer from '../components/footer';
import Header from '../components/header';
import './all.sass'
const Layout = (props) => {
  return (
    <div className="">
      <div className="">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
