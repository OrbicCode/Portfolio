import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <span className={styles.brackets}>{'<>'}</span>
            <h1>James O<span className={styles.heroTextFlare}>'</span>Kane</h1>
            <h4>Software Engineer <span className={styles.heroTextFlare}>|</span> Web Developer</h4>
            <span className={styles.brackets}>{'</>'}</span>
        </div>
    )
}