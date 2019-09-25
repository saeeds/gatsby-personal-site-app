import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
const BlogCard = ({ blog }) => {
    const data = useStaticQuery(getImage)
    const { slug, title, image, published } = blog
    const img = data.file.childImageSharp.fluid
    let mainImage = image ? image.fluid : img
    return (
        <article className={styles.blog}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt={title}/>
                <AniLink fade className={styles.link} to={`/blog/${slug}`} >read more</AniLink>
                <h6 className={styles.date}>{published}</h6>
            </div>
           
            <div className={styles.footer}>
                <h4>{title}</h4>
            </div>
        </article>
    )
}

export default BlogCard
