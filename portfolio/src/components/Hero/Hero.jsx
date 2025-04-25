import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={`${styles.hero}`}>
            <span className={styles.brackets}>{'<>'}</span>
            <h1 className={styles.title}>James O<span className={styles.apostrophe}>'</span>Kane</h1>
            <h2 className={styles.subtitle}>Software Engineer <span className={styles.separator}>|</span> Web Developer</h2>
            <span className={styles.brackets}>{'</>'}</span>
        </div>
    )
}