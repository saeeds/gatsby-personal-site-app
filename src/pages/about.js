import React from "react";
import { Link } from "gatsby"
import Layout from '../components/layout';
const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Me</h1>
        <p> I currently teach full time on university</p>
        <p>Need Help ? <Link to="/contact">Conatct me.</Link></p>
      </Layout>
    </div>
  )
}
export default AboutPage
