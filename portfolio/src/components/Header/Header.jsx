import HeaderTop from '../HeaderTop/HeaderTop'
import Hero from '../Hero/Hero'
import styles from './Header.module.css'

export default function Header({ id, isScrolled }) {

    return (
        <header id={id} className={`${styles.header} section`}>
            <div className='container'>

                <HeaderTop isScrolled={isScrolled} />
                <div className={styles.heroContainer}>
                    <Hero isScrolled={isScrolled} />
                </div>
                
                <div className={styles.curve}></div>
            </div>    
        </header>
    )
}