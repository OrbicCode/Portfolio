import { useState } from "react"
import styles from './HeaderTop.module.css'
import Navigation from "../Navigation/Navigation"
import profileImage from '../../assets/cross-arm-profile.jpg'

export default function HeaderTop() {

    const [isNavOpen, setIsNavOpen] = useState(false)

    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }

    return (
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
    )
}