import HeaderTop from "../../components/HeaderTop/HeaderTop"
import WorkItem from "../../components/WorkItem/WorkItem"
import scrimbaProjectsData from '../../data/scrimbaProjectsData'
import styles from './Scrimba.module.css'

export default function Scrimba({ isScrolled }) {

    const workItemDisplay = scrimbaProjectsData.map(project => {
        return (
            <WorkItem
                key={project.id}
                imgUrl={project.coverImage.src}
                alt={project.coverImage.alt}
                title={project.title}
                subTitle={project.subTitle}
                linkTo={project.linkTo}
            />      
        ) 
    })
    return (
        <section className={`${styles.scrimba} ${isScrolled ? styles.paddingTop : ""} section`}>
            <div className="container">
                <HeaderTop isScrolled={isScrolled} />
                <h1 className={styles.title}>Scrimba Projects</h1>
                <h2 className={styles.subtitle}>Check out The projects I have done during my Scrimba Courses</h2>
                <div className={styles.workItemsContainer}>
                    {workItemDisplay}
                </div>
            </div>
        </section>
    )
}