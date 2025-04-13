import { useRef } from 'react'
import styles from './Header.module.css'
import profileImage from '../assets/cross-arm-profile.jpg'

export default function Header() {
    const navRef = useRef(null)

    function toggleNav() {
        if (navRef.current) {
            navRef.current.classList.toggle(styles.navOpen)
        }
    }

    return (
        <header id='home' className={`${styles.header} header`}>
            <div className={styles.headerTop}>
                <div className={styles.logo}>
                    <img src={profileImage} alt="" className={styles.profileImg} />
                    <span className={styles.logoTitle}>James O'Kane</span>
                </div>
                <button onClick={toggleNav} className={styles.burger}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            
                <nav ref={navRef} className={styles.nav}>
                    <button onClick={toggleNav}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <ul>
                        <li><a href='#home' onClick={toggleNav}>{'< Home >'}</a></li>
                        <li><a href="#about" onClick={toggleNav}>{'< About >'}</a></li>
                        <li>{'< Expertise >'}</li>
                        <li>{'< Work >'}</li>
                        <li>{'< Contact >'}</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.hero}>
                <span className={styles.brackets}>{'<>'}</span>
                <h1>James O<span className={styles.heroTextFlare}>'</span>Kane</h1>
                <h4>Software Engineer <span className={styles.heroTextFlare}>|</span> Web Developer</h4>
                <span className={styles.brackets}>{'</>'}</span>
            </div>
            <div className={styles.curve}></div>
        </header>
    )
}