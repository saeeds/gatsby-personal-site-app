import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
query {
    file(relativePath:{eq:"defaultBcg.jpeg"}){
       childImageSharp{
        fluid{
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Project = ({ project }) => {
    const { name, slug, months, country, images } = project
    const data = useStaticQuery(getImage)
    const img = data.file.childImageSharp.fluid
    let mainImage = images ? images[0].fluid : img
    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single project" />
                <AniLink fade className={styles.link} to={`/projects/${slug}`}>
                    details
                </AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    <h4 className={styles.country}>
                        <FaMap className={styles.icon} />
                        {country || 'defualt country'}
                    </h4>
                </div>
                <div className={styles.details}>
                    <h6>{months} months</h6>
                    <h6>Sr. Developer </h6>
                </div>
            </div>
        </article>
    )
}

Project.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        months: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
}
export default Project
