import React, { Component } from 'react'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import { graphql } from 'gatsby'
export default ({data}) => (
  <Layout>
    <StyledHero home="true"
      img={data.defaultBcg.childImageSharp.fluid} >
      <Banner
        title="continue exploring"
        info="Software Architect, Senior Technical Consultant and Trainer."
      >
        <Link to="/projects" className="btn-white">
          explore projects
            </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
query {
  defaultBcg:file(relativePath: {eq: "defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`