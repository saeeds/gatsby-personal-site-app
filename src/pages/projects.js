import React, { Component } from 'react'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
const projects = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.projectBcg.childImageSharp.fluid} />
    </Layout>
  )
}
export const query = graphql`
query {
  projectBcg:file(relativePath: {eq: "defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default projects