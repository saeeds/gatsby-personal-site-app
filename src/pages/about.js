import React from "react"
import Footer from '../components/footer';
import Header from '../components/header';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p> I currently teach full time on university</p>
      <p>Need Help ? <link to="/contact">Conatct me.</link></p>
      <Footer />
    </div>
  )
}

export default AboutPage
