import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <img src={imgUrl} alt={alt} />
                <div className={styles.itemText}>
                    <div className={styles.info}>
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                    </div>
                    <span className={isMouseOver ? styles.showReadMore : styles.readMore}>
                        <i className="fa-solid fa-magnifying-glass-arrow-right"></i>
                    </span>
                </div>
            </div>
        </Link>
    )
}