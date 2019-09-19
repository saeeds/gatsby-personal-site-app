import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'
import { Link } from 'gatsby'
const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="me" />
            <div className={styles.aboutCenter}>
                 <article className={styles.aboutImg}>
                     <div className={styles.imgContainer}>
                        <img src={img} alt="about me" />
                     </div>
                 </article>
                 <article className={styles.aboutInfo}>
                     <h4>Independent - Software Architect /Technical Consultant</h4>
                     <p>
                      Solutions-focused sharepoint application development consultant, UI architecture, technical leader & expert trainer with 12 years’ experience in microsoft sharePoint, .NET technology, java script (angular, react, node JS) best practices, is keen to maintain a strong career path whereby exploiting his management skills, problem-solving and teamwork strengths alongside an enthusiastic learning drive
                     </p>
                     <p></p>
                     <button type="button" className="btn-primary"><Link to="/aboutme">read more</Link></button>
                 </article>
            </div>
        </section>
    )
}

export default About
