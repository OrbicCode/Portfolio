import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SkillItem from "../../components/SkillItem/SkillItem";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import projectData from "../../data/projectData";
import scrimbaProjectData from "../../data/scrimbaProjectsData";
import NotFound from "../NotFound/NotFound";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
	const { id } = useParams();
	const [project, setProject] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const combinedData = [...projectData, ...scrimbaProjectData];
		const foundProject = combinedData.find((project) => project.id === id);
		setProject(foundProject);
		setIsLoading(false);
	}, [id]);

	if (isLoading) {
		return;
	}

	if (!project) {
		return <NotFound />;
	}

	const backgroundStyles = {
		backgroundImage: `url(${project?.coverImage.src})`,
	};

	const imageDisplay = project?.projectImages.map((image, index) => {
		return (
			<img key={index} src={image.src} alt={image.alt} loading='lazy' />
		);
	});

	const techUsedDisplay = project?.techUsed.map((tech) => {
		return <SkillItem key={tech} text={tech} />;
	});

	return (
		<div
			style={backgroundStyles}
			className={`${styles.projectPage} section`}
		>
			<div className='container'>
				<HeaderTop />
				<div className={styles.projectInfo}>
					<div className={styles.projectMainInfo}>
						<h1 className={styles.title}>{project.title}</h1>
						<h2 className={styles.subTitle}>{project.subTitle}</h2>
						<p className={styles.description}>
							{project.description}
						</p>
					</div>
					<div className={styles.techUsed}>
						<h2 className={styles.techTitle}>Tech Used</h2>
						<p className={styles.mouseOver}>
							( Hint: mouse over them )
						</p>
						<ul className={styles.list}>{techUsedDisplay}</ul>
					</div>
				</div>
				<h2 className={styles.linkTitle}>Links</h2>
				<div className={styles.linkContainer}>
					{project.liveLink ? (
						<Link
							to={project.liveLink}
							target='_blank'
							className={styles.link}
						>
							Live Link
						</Link>
					) : null}
					{project.gitHub ? (
						<Link
							to={project.gitHub}
							target='_blank'
							className={styles.link}
						>
							GitHub
						</Link>
					) : null}
				</div>

				<div className={styles.imageDisplay}>{imageDisplay}</div>
			</div>
		</div>
	);
}
