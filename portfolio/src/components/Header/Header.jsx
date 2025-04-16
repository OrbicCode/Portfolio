import HeaderTop from '../HeaderTop/HeaderTop'
import Hero from '../Hero/Hero'
import styles from './Header.module.css'

export default function Header() {

    return (
        <header id='home' className={`${styles.header} section`}>
            <div className='container'>

                <HeaderTop />
                <div className={styles.heroContainer}>
                    <Hero />
                </div>
                
                <div className={styles.curve}></div>
            </div>    
        </header>
    )
}