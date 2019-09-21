import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { format } from 'url'

const getsiteData = graphql`
query FirstQuery {
    site{
      siteMetadata{
        title
        author
        description
      }
    }
  }
`
const Header = () => {
    const { site: { siteMetadata: { title, author } } } = useStaticQuery(getsiteData)

    return (
        <div>
            <h1>title: {title}</h1>
            <h1>author: {author}</h1>
        </div>
    )
}

export default Header
