import styles from './Work.module.css'
import WorkItem from '../WorkItem/WorkItem'
import projectData from '../../data/projectData'

export default function Work({ id }) {

    const workItemEl = projectData.map((item) => {
        return <WorkItem 
                    key={item.title}
                    id={item.id}
                    imgUrl={item.coverImage.src}
                    alt={item.coverImage.alt}
                    title={item.title}
                    subTitle={item.subTitle}
                    linkTo={item.linkTo}
                />
    })

    return (
        <section id={id} className={`${styles.work} section`}>
            <div className='container'>
                <h2 className={styles.title}>Work</h2>
                <div className={styles.workItemsContainer}>
                    {workItemEl}
                </div>
            </div>
        </section>
    )
}