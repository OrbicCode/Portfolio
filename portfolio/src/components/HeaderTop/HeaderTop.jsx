import { useState } from "react"
import styles from './HeaderTop.module.css'
import Navigation from "../Navigation/Navigation"
import profileImage from '../../assets/cross-arm-profile.jpg'

export default function HeaderTop({ isScrolled }) {

    const [isNavOpen, setIsNavOpen] = useState(false)

    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div 
            className={`${styles.headerTop} ${isScrolled ? styles.fixedHeader : ""}`}>
            <div className={`${styles.logo} ${isScrolled ? styles.hidden : ""}`}>
                <img
                    src={profileImage} 
                    alt="a profile picture of James O'Kane with his arms crossed" 
                    className={`${styles.profileImg}`} 
                />
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
    )
}