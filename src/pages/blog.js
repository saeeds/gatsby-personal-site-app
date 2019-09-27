import React from 'react'
import Layout from '../components/layout'
import Images from '../examples/images'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'
const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
query {
  blogBcg:file(relativePath: {eq: "blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default blog
