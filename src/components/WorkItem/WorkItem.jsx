import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './WorkItem.module.css'

export default function WorkItem({ imgUrl, alt, title, subTitle, linkTo }) {


    const [isMouseOver, setIsMouseOver] = useState(false);


    return (
        <Link to={linkTo} className={styles.link}>
            <div 
                className={styles.item}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
            >
                <img src={imgUrl} alt={alt} loading="lazy"/>
                <div className={styles.itemText}>
                    <div className={styles.info}>
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                    </div>
                    <span className={isMouseOver ? styles.showReadMore : styles.readMore}>
                        <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} className={styles.icon} />
                    </span>
                </div>
            </div>
        </Link>
    )
}