import React from 'react'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
const aboutme = ({ data }) => {
  return (
    <Layout>
      <SEO title="Aboutme" />
      <StyledHero home="true"
        img={data.aboutmeBcg.childImageSharp.fluid} >

      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
query {
  aboutmeBcg:file(relativePath: {eq: "defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default aboutme
