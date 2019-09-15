import React from "react"
import { Link } from "gatsby";
import Layout from '../components/layout';
import Background from '../../static/homev.jpg';

var sectionStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "left top",
  backgroundImage: `url(${Background})`
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="full-width-image margin-top-0" style={sectionStyle} ></div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="title"><h3 className="title">Bio</h3></div>
                <div className="subtitle">
                  <h5 className="subtitle">I'm saeed alsharqawi A solutions-focused SharePoint Application Development Consultant, UI Architecture, Technical Leader and Expert Trainer with 12 years’ experience in Microsoft SharePoint, .NET technology, Java Script (Angular, React, Node JS) best practices, is keen to maintain a strong career path whereby exploiting his management skills, problem-solving and teamwork strengths alongside an enthusiastic learning drive. </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
