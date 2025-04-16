import styles from './Expertise.module.css'
import ExpertiseItem from '../ExpertiseItem/ExpertiseItem'

export default function Expertise() {

    const expertiseItemText = [
        {
            title: "Software Development",
            description: "Experience using JavaScript, TypeScript, Node.js, Express.js"
        },
        {
            title: "Web Development",
            description: "Experience using HTML, CSS, JavaScript, React, Next.js"
        }
    ]

    const expertiseItemEl = expertiseItemText.map((item) => {
        return (
            <ExpertiseItem
                title={item.title}
                description={item.description}
            />
        )
    })

    return (
        <section className={`${styles.expertise} section`}>
            <div className='container'>
                <h2 className={styles.title}>Expertise</h2>
                <div className={styles.expertiseBoxContainer}>
                    {expertiseItemEl}
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
            </div>
        </section>
    )
}