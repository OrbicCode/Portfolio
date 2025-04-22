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
                <li><NavLink to='/#home' onClick={() => handleScroll('home')}><span>{'<'}</span> Home <span>{'>'}</span></NavLink></li>
                <li><NavLink to='/#about' onClick={() => handleScroll('about')}><span>{'<'}</span> About <span>{'>'}</span></NavLink></li>
                <li><NavLink to='/#expertise' onClick={() => handleScroll('expertise')}><span>{'<'}</span> Expertise <span>{'>'}</span></NavLink></li>
                <li><NavLink to='/#work' onClick={() => handleScroll('work')}><span>{'<'}</span> Work <span>{'>'}</span></NavLink></li>
                <li><NavLink to='/#contact' onClick={() => handleScroll('contact')}><span>{'<'}</span> Contact <span>{'>'}</span></NavLink></li>
            </ul>
        </nav>
    )
}