import { NavLink,useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation({ toggleNav, isOpen }) {
    const navigate = useNavigate();

    const navClasses = `${styles.nav} ${isOpen ? styles.navOpen : null}`;

    const handleScroll = (id) => {
        toggleNav(); // Close the navigation
        navigate(`/#${id}`); // Navigate to the home page
        // Wait for navigation to complete, then scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
    };

    return (
        <nav className={navClasses}>
            <button onClick={toggleNav}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <ul>
                <li><NavLink to='/#home' onClick={() => handleScroll('home')}><span className={styles.brackets}>{'<'}</span> Home <span className={styles.brackets}>{'>'}</span></NavLink></li>
                <li><NavLink to='/#about' onClick={() => handleScroll('about')}><span className={styles.brackets}>{'<'}</span> About <span className={styles.brackets}>{'>'}</span></NavLink></li>
                <li><NavLink to='/#expertise' onClick={() => handleScroll('expertise')}><span className={styles.brackets}>{'<'}</span> Expertise <span className={styles.brackets}>{'>'}</span></NavLink></li>
                <li><NavLink to='/#work' onClick={() => handleScroll('work')}><span className={styles.brackets}>{'<'}</span> Work <span className={styles.brackets}>{'>'}</span></NavLink></li>
                <li><NavLink to='/#contact' onClick={() => handleScroll('contact')}><span className={styles.brackets}>{'<'}</span> Contact <span className={styles.brackets}>{'>'}</span></NavLink></li>
            </ul>
        </nav>
    )
}