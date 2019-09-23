import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Project = ({ project }) => {
    const { name, slug, months, country, images } = project
    let mainImage = images[0].fluid
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
                        {country}
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

export default Project
