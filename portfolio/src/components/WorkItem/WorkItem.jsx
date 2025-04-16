import { useState } from 'react'
import styles from './WorkItem.module.css'

export default function WorkItem({ imgUrl, alt, title, description }) {

    const [isMouseOver, setIsMouseOver] = useState(false)

    return (
        <div 
            className={styles.item}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            <img src={imgUrl} alt={alt} />
            <div className={styles.itemText}>
                <div className={styles.info}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <span className={isMouseOver ? styles.showReadMore : styles.readMore}>
                    Read more
                </span>
            </div>
        </div>
    )
}