import styles from './Work.module.css'
import imgUrl from '../../assets/garden-2.jpeg'
import garden1 from '../../assets/garden-1.jpeg'
import garden from '../../assets/garden.jpeg'
import mesh from '../../assets/mesh-1.jpeg'
import WorkItem from '../WorkItem/WorkItem'

export default function Work() {

    const workItemData = [
        {   
            id: "focus-points",
            imgUrl: imgUrl,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
        {
            id: "dew-it",
            imgUrl: garden1,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
        {
            imgUrl: garden,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
        {
            imgUrl: mesh,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
    ]

    const workItemEl = workItemData.map((item, index) => {
        return <WorkItem 
                    key={index}
                    id={item.id}
                    imgUrl={item.imgUrl}
                    alt={item.alt}
                    title={item.title}
                    description={item.description}
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