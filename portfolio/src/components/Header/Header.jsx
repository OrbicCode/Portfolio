import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'
import profileImage from '../../assets/cross-arm-profile.jpg'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header id='home' className={`${styles.header} section`}>
            <div className='container'>
                <div className={styles.headerTop}>
                    <div className={styles.logo}>
                        <img src={profileImage} alt="" className={styles.profileImg} />
                        <span className={styles.logoTitle}>James O'Kane</span>
                    </div>
                    <button onClick={toggleNav} className={styles.burger}>
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <Navigation 
                        toggleNav={toggleNav}
                        isOpen={isNavOpen} 
                    />

                </div>
                <div className={styles.hero}>
                    <span className={styles.brackets}>{'<>'}</span>
                    <h1>James O<span className={styles.heroTextFlare}>'</span>Kane</h1>
                    <h4>Software Engineer <span className={styles.heroTextFlare}>|</span> Web Developer</h4>
                    <span className={styles.brackets}>{'</>'}</span>
                </div>
                <div className={styles.curve}></div>
            </div>    
        </header>
    )
}