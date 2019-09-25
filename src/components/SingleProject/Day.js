import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import styles from '../../css/day.module.css'
const Day = () => {
    const [showInfo, setInfo] = useState(false)
    const toggleInfo = () => {
        setInfo(showInfo => !showInfo)
    }
    return (
        <article className={styles.day}>
            <h4>
                test test test
               <button className={styles.btn} onClick={toggleInfo}>
                    <FaAngleDown />
                </button>
            </h4>
            {showInfo && <p>Info Info Info</p>}
        </article>
    )
}

export default Day
