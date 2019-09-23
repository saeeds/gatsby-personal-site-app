import React, { Component } from 'react'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import { graphql } from 'gatsby'
import FeaturedProjects from '../components/Home/FeaturedProjects'

export default ({ data }) => (
  <Layout>
    <StyledHero home="true"
      img={data.defaultBcg.childImageSharp.fluid} >
      <Banner
        title="continue exploring"
        info="Software Architect, Senior Technical Consultant and Trainer."
      >
        <AniLink fade to="/projects" className="btn-white">
          explore projects
            </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedProjects></FeaturedProjects>
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