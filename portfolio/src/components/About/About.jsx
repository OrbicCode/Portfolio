import styles from './About.module.css'

export default function About() {
    return (
        <section id='about' className={`${styles.about} section`}>
            <div className="container">
                <h2 className={styles.title}>About</h2>
                <div className={styles.articlesContainer}>
                    <div>
                        <h3 className={styles.articleTitle}>Journey so far</h3>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum."
                        <br />
                        <br />
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div>
                        <h3 className={styles.articleTitle}>Journey so far</h3>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum."
                        <br />
                        <br />
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}