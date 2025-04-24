import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import SkillItem from "../../components/SkillItem/SkillItem"
import HeaderTop from "../../components/HeaderTop/HeaderTop"
import projectData from "../../data/projectData"
import scrimbaProjectData from "../../data/scrimbaProjectsData"
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        const combinedData = [...projectData, ...scrimbaProjectData]
        const foundProject = combinedData.find(project => project.id === id)
        setProject(foundProject)
    }, [id])

    const backgroundStyles = {
        backgroundImage: `url(${project?.coverImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed',
        height: '100vh'
    }

    const imageDisplay = project?.projectImages.map((image, index) => {
        return <img key={index} src={image.src} alt={image.alt} loading="lazy"/>
    })

    const techUsedDisplay = project?.techUsed.map(tech => {
        return <SkillItem key={tech} text={tech} />
    })

    if(!project) {
        return <h1>loading...</h1>
    }

    return (
        <div style={backgroundStyles} className={`${styles.projectPage} section`}>
            <div className="container">
                <HeaderTop />
                <div className={styles.projectInfo}>
                    <div className={styles.projectMainInfo}>
                        <h1 className={styles.title}>{project.title}</h1>
                        <h2 className={styles.subTitle}>{project.subTitle}</h2>
                        <p className={styles.description}>{project.description}</p>
                    </div>
                    <div className={styles.techUsed}>
                        <h2 className={styles.techTitle}>Tech Used</h2>
                        <ul className={styles.list}>
                            {techUsedDisplay}
                        </ul>
                    </div>
                </div>
                <h2 className={styles.linkTitle}>Links</h2>
                <div className={styles.linkContainer}>
                    {project.liveLink ? <Link to={project.liveLink} target="_blank" className={styles.link}>Live Link</Link>: null}
                    {project.gitHub ? <Link to={project.gitHub} target="_blank" className={styles.link}>GitHub</Link>: null}
                </div>
                
                <div className={styles.imageDisplay}>
                    {imageDisplay}
                </div>
                
            </div>
        </div>
    )
}