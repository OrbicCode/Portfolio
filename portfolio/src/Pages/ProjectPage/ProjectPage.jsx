import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
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
        backgroundColor: 'rgba(15, 19, 22, 0.85)',
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed',
        height: '100vh'
    }

    if (!project) {
        return <p>Not Found</p>
    }

    return (
        <div style={backgroundStyles} className="section">
            <div className="container">
                <HeaderTop />
                <h1>{project.title}</h1>
                <h2>subtitle placeholder</h2>
                <p>{project.description}</p>
                <div>
                    <h2>Tech Used</h2>
                    <ul className={styles.list}>
                        <SkillItem text="HTML" />
                        <SkillItem text="CSS" />
                        <SkillItem text="JS" />
                        <SkillItem text="React" />
                        <SkillItem text="Next.js" />
                    </ul>
                </div>
                <button>Live Link</button>
                <div>
                    <img />
                    <img />
                </div>
                
            </div>
        </div>
    )
}