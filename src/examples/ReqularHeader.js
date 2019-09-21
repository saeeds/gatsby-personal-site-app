import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
const getsiteData = graphql`
query SecondQuery {
    site{
      siteMetadata{
        title
        author
        description
      }
    }
  }
`
const ReqularHeader = () => {
  return (
    <StaticQuery
      query={getsiteData}
      render={({ site: { siteMetadata: { title } } }) => {
        return <h1>{title}</h1>
      }
      }
    />
  )
}
export default ReqularHeader
