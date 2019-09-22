import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/mypic.jpeg'
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {useStaticQuery,graphql} from 'gatsby'

const getAbout = graphql`
query aboutImage{
    aboutImage:file(relativePath: {eq: "mypic.jpeg"}){
      childImageSharp{
        fluid(maxWidth:600){
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const About = () => {
    const {aboutImage} = useStaticQuery(getAbout)
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="me" />
            <div className={styles.aboutCenter}>
                 <article className={styles.aboutImg}>
                     <div className={styles.imgContainer}>
                     <Img fluid={aboutImage.childImageSharp.fluid} alt="about me" />
                     </div>
                 </article>
                 <article className={styles.aboutInfo}>
                     <h4>Software Architect, Senior Technical Consultant & Trainer</h4>
                     <p>
                       I have a lot of experience in the Microsoft product stack. During the past years I have been fully dedicated to working on Microsoft .NET, SharePoint, Office 365, Azure,React, Nodejs and Business Intelligence solutions for the enterprise.
                     </p>
                     <p>I have been involved in a lot of different projects, including SharePoint, .NET, Office 365 and Azure projects. Mainly as lead developer, solution architect and the bridge between business and technology.</p>
                     <button type="button" className="btn-primary"><AniLink fade to="/aboutme">read more</AniLink></button>
                 </article>
            </div>
        </section>
    )
}

export default About
