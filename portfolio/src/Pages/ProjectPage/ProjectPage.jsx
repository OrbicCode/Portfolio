import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import SkillItem from "../../components/SkillItem/SkillItem"
import HeaderTop from "../../components/HeaderTop/HeaderTop"
import projectData from "../../data/projectData"
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        const foundProject = projectData.find(project => project.id === id)
        setProject(foundProject)
    }, [id])

    const backgroundStyles = {
        backgroundImage: `url(${project ? project.coverImage.image: null})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundBlendMode: 'overlay',
        // backgroundAttachment: 'fixed',
        height: '100vh'
    }

    if (!project) {
        return <p>Not Found</p>
    }

    const imageDisplay = project.projectImages.map((image, index) => {
        return <img key={index} src={image.src} alt={image.alt} />
    })

    return (
        <div style={backgroundStyles} className="section">
            <div className="container">
                <HeaderTop />
                <h1 className={styles.title}>{project.title}</h1>
                <h2 className={styles.subTitle}>subtitle placeholder</h2>
                <p className={styles.description}>{project.description}</p>
                <div>
                    <h2 className={styles.techTitle}>Tech Used</h2>
                    <ul className={styles.list}>
                        <SkillItem text="HTML" />
                        <SkillItem text="CSS" />
                        <SkillItem text="JS" />
                        <SkillItem text="React" />
                        <SkillItem text="Next.js" />
                    </ul>
                </div>
                <button>Live Link</button>
                <div className={styles.imageDisplay}>
                    {imageDisplay}
                </div>
                
            </div>
        </div>
    )
}