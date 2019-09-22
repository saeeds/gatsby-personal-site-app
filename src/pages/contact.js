import React from 'react'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
const contact = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.connectBcg.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
query {
  connectBcg:file(relativePath: {eq: "connectBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default contact

