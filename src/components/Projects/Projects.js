import React from 'react'
import ProjectList from './ProjectList'
import {useStaticQuery,graphql} from 'gatsby'

const getProjects = graphql`
query {
    projects:allContentfulProject {
      edges {
        node{
          name
          slug
          country
          contentful_id
          start
          description{
            description
          }
          featured
          months
          images {
            fluid{
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          details{
            day
          }
        }
      }
    }
  }
`
const Projects = () => {
    const {projects} = useStaticQuery(getProjects)
    return (
        <div>
           <ProjectList projects={projects}/>
        </div>
    )
}

export default Projects
