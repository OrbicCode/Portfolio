import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderTop.module.css'
import Navigation from "../Navigation/Navigation"
import profileImage from '../../assets/general/cross-arm-profile.png'

export default function HeaderTop({ isScrolled }) {

    const [isNavOpen, setIsNavOpen] = useState(false)

    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div className={`${styles.headerTop} ${isScrolled ? styles.fixedHeader : ""}`}>
            <Link to="/#home" className={`${styles.logo} ${isScrolled ? styles.hidden : ""}`}>
                <img
                    src={profileImage} 
                    alt="a profile picture of James O'Kane with his arms crossed" 
                    className={`${styles.profileImg}`} 
                />
                <span className={styles.logoTitle}>James O'Kane</span>
            </Link>
            <button onClick={toggleNav} className={styles.burger}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        
            <Navigation 
                toggleNav={toggleNav}
                isOpen={isNavOpen}
                isScrolled={isScrolled} 
            />
        </div>
    )
}