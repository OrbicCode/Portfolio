import styles from './Navigation.module.css'

export default function Navigation({ toggleNav, isOpen }) {

    const navClasses = `${styles.nav} ${isOpen ? styles.navOpen : null}`

    return (
        <nav className={navClasses}>
            <button onClick={toggleNav}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <ul>
                <li><a href='#home' onClick={toggleNav}><span>{'<'}</span> Home <span>{'>'}</span></a></li>
                <li><a href='#about' onClick={toggleNav}><span>{'<'}</span> About <span>{'>'}</span></a></li>
                <li><a href='#expertise' onClick={toggleNav}><span>{'<'}</span> Expertise <span>{'>'}</span></a></li>
                <li><a href='#work' onClick={toggleNav}><span>{'<'}</span> Work <span>{'>'}</span></a></li>
                <li><a href='#contact' onClick={toggleNav}><span>{'<'}</span> Contact <span>{'>'}</span></a></li>
            </ul>
        </nav>
    )
}