import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import styles from './ScrollToTop.module.css'

export default function ScrollToTop() {
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
    function toggleVisibility() {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
},[])

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

    return (
        <button onClick={scrollToTop} className={`${styles.button} ${isVisible ? styles.visible : ""}`}>
            <FontAwesomeIcon icon={faAnglesUp} />
        </button>
    )
}