import HeaderTop from "../../components/HeaderTop/HeaderTop"
import WorkItem from "../../components/WorkItem/WorkItem"
import scrimbaProjectData from '../../data/scrimbaProjectData'

export default function Scrimba() {
    
    const workItemDisplay = scrimbaProjectData.map(project => {
        return (
            <WorkItem
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
                <div>
                    {workItemDisplay}
                </div>
            </div>
        </section>
    )
}