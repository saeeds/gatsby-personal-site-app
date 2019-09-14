import React from "react"
import {Link} from "gatsby";
import Footer from '../components/footer';
import Header from '../components/header';
const IndexPage = () => {
  return (
    <div>
       <Header />
       <h1>Saeed Alsharqawi Personal Web Site</h1>
       <h2>I'm saeed alsharqawi A solutions-focused SharePoint Application Development Consultant, UI Architecture, Technical Leader & Expert Trainer with 12 years’ experience in Microsoft SharePoint, .NET technology, Java Script (Angular, React, Node JS) best practices, is keen to maintain a strong career path whereby exploiting his management skills, problem-solving and teamwork strengths alongside an enthusiastic learning drive. </h2>
       <p>Need a Support? <Link to="/contact">conatct me</Link></p>
       <Footer />
    </div>
  )
}

export default IndexPage
