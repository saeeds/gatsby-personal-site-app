import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Day from '../components/SingleProject/Day'

const Template = ({ data }) => {
  const {
    name,
    country,
    months,
    description: { description },
    images,
    details,
    start
  } = data.project

  const [mainImage, ...projectImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template} >
        <div className={styles.center}>
          <div className={styles.images}>
            {
              projectImages.map((item, index) => {
                return (
                  <Img
                    key={index}
                    fluid={item.fluid}
                    alt={name}
                    className={styles.image}
                  />)
              })
            }
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              main role :  Senior Eng.
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>Duration: `${months} months`</h4>
          <p className={styles.desc}>
            {description}
          </p>
          <h2>Project Details</h2>
          <div>
             {
               details.map((item, index) => {
                 return  <Day key={index} detail={item}/>
               })
             }
          </div>
         
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug:String!) {
        project:contentfulProject(slug:{eq:$slug}) {
            name
            slug
            country
            contentful_id
            start(formatString:"dddd MMMM Do, YYYY")
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
`
export default Template
