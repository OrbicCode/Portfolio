import styles from './Expertise.module.css'

export default function Expertise() {
    return (
        <section className={`${styles.expertise} expertise`}>
            <h2 className={styles.title}>Expertise</h2>
            <div className={styles.expertiseBoxContainer}>
                <div className={styles.expertiseBox}>
                    <h3 className={styles.expertiseTitle}>
                        <span className={styles.expertiseTitleTop}>Software</span>
                        <br />
                        Development
                    </h3>
                    <p className={styles.expertiseDescription}>
                        Experience using JavaScript, TypeScript, Node.js, Express.js
                    </p>
                </div>
                <div className={styles.expertiseBox}>
                    <h3 className={styles.expertiseTitle}>
                    <span className={styles.expertiseTitleTop}>Web</span>
                        <br />
                        Development
                    </h3>
                    <p className={styles.expertiseDescription}>
                        Experience using HTML, CSS, JavaScript React, Next.js
                    </p>
                </div>
            </div>
            <h3 className={styles.skillsTitle}>Skills</h3>
            <div className={styles.skillsContainer}>
                <div className={styles.skillItem}>
                    <span>HTML</span>
                </div>
                <div className={styles.skillItem}>
                    <span>CSS</span>
                </div>
                <div className={styles.skillItem}>
                    <span>JavaScript</span>
                </div>
                <div className={styles.skillItem}>
                    <span>TypeScript</span>
                </div>
                <div className={styles.skillItem}>
                    <span>React</span>
                </div>
                <div className={styles.skillItem}>
                    <span>Next.js</span>
                </div>
            </div>
        </section>
    )
}