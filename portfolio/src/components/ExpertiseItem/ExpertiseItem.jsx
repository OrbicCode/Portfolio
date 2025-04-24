import styles from './ExpertiseItem.module.css'

export default function ExpertiseItem({ title, description }) {
    
    return (
        <div className={styles.box}>
            <h3>
                <span className={styles.titleTop}>{title.split(" ")[0]}</span>
                <br />
                {title.split(" ")[1]}
            </h3>
            <p className={styles.description}>
                {description[0]}<br />
                {description[1]}
            </p>
        </div>
    )
}