import HeaderTop from '../HeaderTop/HeaderTop'
import Hero from '../Hero/Hero'
import styles from './Header.module.css'

export default function Header() {

    return (
        <header id='home' className={`${styles.header} section`}>
            <div className='container'>

                <HeaderTop />
                <Hero />

                <div className={styles.curve}></div>
            </div>    
        </header>
    )
}