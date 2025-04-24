import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.css';

export default function Navigation({ toggleNav, isOpen }) {
    const navigate = useNavigate();

    const navClasses = `${styles.nav} ${isOpen ? styles.navOpen : null}`;

    const handleScroll = (id) => {
        toggleNav();
        navigate(`/#${id}`); 
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
    };

    return (
        <nav className={navClasses}>
            <button onClick={toggleNav}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul>
                <li>
                    <NavLink 
                        to='/#home' 
                        onClick={(e) => {handleScroll('home'); e.target.blur()}}
                    >
                        <span className={styles.brackets}>{'<'}</span> Home <span className={styles.brackets}>{'>'}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/#about' 
                        onClick={(e) => {handleScroll('about'); e.target.blur()}}
                    >
                        <span className={styles.brackets}>{'<'}</span> About <span className={styles.brackets}>{'>'}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/#expertise' 
                        onClick={(e) => {handleScroll('expertise'); e.target.blur()}}
                    >
                        <span className={styles.brackets}>{'<'}</span> Expertise <span className={styles.brackets}>{'>'}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/#work' 
                        onClick={(e) => {handleScroll('work'); e.target.blur()}}
                    >
                        <span className={styles.brackets}>{'<'}</span> Work <span className={styles.brackets}>{'>'}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/#contact' 
                        onClick={(e) => {handleScroll('contact'); e.target.blur()}}
                    >
                        <span className={styles.brackets}>{'<'}</span> Contact <span className={styles.brackets}>{'>'}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}