import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <section className={styles.notFound}>
            <div className={styles.text}>
                <h1>404</h1>
                <p>Oh no!! Looks like the page you were looking for doesn't exist</p>
            </div>
            <Link to="/"
                  className={styles.link}
            >
                Go Back to Home
            </Link>
        </section>
    )
}