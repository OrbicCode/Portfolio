import HeaderTop from "../../components/HeaderTop/HeaderTop"
import WorkItem from "../../components/WorkItem/WorkItem"
import scrimbaProjectData from '../../data/scrimbaProjectData'
import styles from './Scrimba.module.css'

export default function Scrimba() {
    
    const workItemDisplay = scrimbaProjectData.map(project => {
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
        <section className="section">
            <div className="container">
                <HeaderTop />
                <h1>Scrimba</h1>
                <h2></h2>
                <div className={styles.workItemsContainer}>
                    {workItemDisplay}
                </div>
            </div>
        </section>
    )
}