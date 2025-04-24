import { useState, useEffect } from 'react'
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
            <i className="fa-solid fa-angles-up"></i>
        </button>
    )
}