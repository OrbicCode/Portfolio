import styles from "./Expertise.module.css";
import ExpertiseItem from "../ExpertiseItem/ExpertiseItem";
import SkillItem from "../SkillItem/SkillItem";

export default function Expertise({ id }) {
	const expertiseItemText = [
		{
			title: "Software Development",
			description: [
				"Experience using: ",
				"JavaScript, TypeScript, Node.js, Express.js",
			],
		},
		{
			title: "Web Development",
			description: [
				"Experience using: ",
				"HTML, CSS, JavaScript, React, Next.js",
			],
		},
	];

	const skillItemText = [
		"HTML",
		"CSS",
		"JavaScript",
		"TypeScript",
		"SQL",
		"React",
		"Next.js",
		"Node.js",
		"Vite",
		"Git",
		"GitHub",
		"Docker",
		"PlayWright",
		"AWS",
		"Figma",
		"Responsive Design",
		"Agile",
	];

	const expertiseItemEl = expertiseItemText.map((item) => {
		return (
			<ExpertiseItem
				key={item.title}
				title={item.title}
				description={item.description}
			/>
		);
	});

	const skillItemEl = skillItemText.map((item) => {
		return <SkillItem key={item} text={item} />;
	});

	return (
		<section id={id} className={`${styles.expertise} section`}>
			<div className='container'>
				<h2 className={styles.title}>Expertise</h2>
				<div className={styles.expertiseItemContainer}>
					{expertiseItemEl}
				</div>
				<h3 className={styles.skillsTitle}>Skills</h3>
				<p className={styles.mouseOver}>( Hint: mouse over them )</p>
				<ul className={styles.skillsContainer}>{skillItemEl}</ul>
			</div>
		</section>
	);
}
