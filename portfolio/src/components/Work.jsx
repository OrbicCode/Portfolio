import styles from './Work.module.css'
import placeholder from '../assets/garden-2.jpeg'

export default function Work() {
    return (
        <section className={`${styles.work} section`}>
            <div className='container'>
                <h2 className={styles.title}>Work</h2>
                <div className={styles.workItemsContainer}>
                    <div className={styles.workItem}>
                        <img src={placeholder} alt='' />
                        <div className={styles.workItemText}>
                            <h3>ReelMagic</h3>
                            <p>Movie Review Site</p>
                        </div>
                    </div>
                </div>

                <div className={styles.workItemsContainer}>
                    <div className={styles.workItem}>
                        <img src={placeholder} alt='' />
                        <div className={styles.workItemText}>
                            <h3>ReelMagic</h3>
                            <p>Movie Review Site</p>
                        </div>
                    </div>
                </div>

                <div className={styles.workItemsContainer}>
                    <div className={styles.workItem}>
                        <img src={placeholder} alt='' />
                        <div className={styles.workItemText}>
                            <h3>ReelMagic</h3>
                            <p>Movie Review Site</p>
                        </div>
                    </div>
                </div>

                <div className={styles.workItemsContainer}>
                    <div className={styles.workItem}>
                        <img src={placeholder} alt='' />
                        <div className={styles.workItemText}>
                            <h3>ReelMagic</h3>
                            <p>Movie Review Site</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}