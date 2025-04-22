import styles from './Contact.module.css'

export default function Contact({ id }) {
    return (
        <section id={id} className={`${styles.contact} section`}>
            <div className='container'>
                <h2 className={styles.title}>Contact</h2>
                <h3 className={styles.available}>Available for hire</h3>
                <p className={styles.hook}>
                    Let's make something cool together
                <br />
                <br />
                    Drop me an email or send me a message on LinkedIn 
                </p>
                <p className={styles.email}>orbiccode@gmail.com</p>
                <div>
                    <p className={styles.links}>LinkedIn</p>
                    <p className={styles.links}>GitHub</p>
                </div>
            </div>
        </section>
    )
}