import React from 'react'
import Project from '../Projects/Project'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const getProjects = graphql`
query {
    Allfeaturedprojects:allContentfulProject(filter:{featured:{eq:true}}) {
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
  }`

const FeaturedProjects = () => {
  const response = useStaticQuery(getProjects);
  
  const projects = response.Allfeaturedprojects.edges
  return (
    <div>
      <section className={styles.tours}>
        <Title title="my" subtitle="projects" />
        <div className={styles.center}>
          {projects.map(({ node }) => {
            return <Project key={node.contentful_id} project={node} />
          })}
        </div>
        <AniLink fade to="/projects" className="btn-primary">all projects</AniLink>
      </section>
    </div>
  )
}

export default FeaturedProjects
