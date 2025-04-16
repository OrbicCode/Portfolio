import styles from './WorkItem.module.css'

export default function WorkItem({ imgUrl, alt, title, description }) {
    return (
        <div className={styles.workItemsContainer}>
            <div className={styles.workItem}>
                <img src={imgUrl} alt={alt} />
                <div className={styles.workItemText}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}