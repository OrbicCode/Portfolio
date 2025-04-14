import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section className={`${styles.contact} contact`}>
            <h2>Contact</h2>
            <h3>Available for hire</h3>
            <p>
            Want me to join your team?
            <br />
            I know I want to join yours
            <br />
            Drop me an email or send me a message on LinkedIn 
            </p>
            <span>orbiccode@gmail.com</span>
            <div>
                <p>LinkedIn</p>
                <p>GitHub</p>
            </div>
        </section>
    )
}