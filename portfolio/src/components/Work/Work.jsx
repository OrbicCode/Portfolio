import styles from './Work.module.css'
import imgUrl from '../../assets/garden-2.jpeg'
import WorkItem from '../WorkItem/WorkItem'

export default function Work() {

    const workItemData = [
        {
            imgUrl: imgUrl,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
        {
            imgUrl: imgUrl,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
        {
            imgUrl: imgUrl,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
        {
            imgUrl: imgUrl,
            alt: "image of ...",
            title: "Focus Points",
            description: "Self-Reflection App",
        },
    ]

    const workItemEl = workItemData.map((item, index) => {
        return <WorkItem 
                    key={index}
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