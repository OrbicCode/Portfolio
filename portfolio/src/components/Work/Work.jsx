import styles from './Work.module.css'
import WorkItem from '../WorkItem/WorkItem'
import projectData from '../../data/projectData'

export default function Work() {

    const workItemEl = projectData.map((item, index) => {
        return <WorkItem 
                    key={index}
                    id={item.id}
                    imgUrl={item.coverImage.src}
                    alt={item.coverImage.alt}
                    title={item.title}
                    subTitle={item.subTitle}
                    linkTo={item.linkTo}
                />
    })

    return (
        <section className={`${styles.work} section`}>
            <div className='container'>
                <h2 className={styles.title}>Work</h2>
                <div className={styles.workItemsContainer}>
                    {workItemEl}
                </div>
            </div>
        </section>
    )
}