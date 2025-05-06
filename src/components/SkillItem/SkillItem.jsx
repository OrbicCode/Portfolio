import { useState } from "react";
import styles from "./SkillItem.module.css";

export default function SkillItem({ text }) {
	const colors = [
		"var(--blue)",
		"var(--purple)",
		"var(--moss)",
		"var(--rust)",
	];
	const [bgColor, setBgColor] = useState(null);

	function handleMouseOver() {
		const randomIndex = Math.floor(Math.random() * colors.length);
		setBgColor(colors[randomIndex]);
	}

	// function removeColor() {
	//     setBgColor("unset")
	// }

	return (
		<li
			className={styles.item}
			onMouseEnter={handleMouseOver}
			// onMouseLeave={removeColor}
			style={{ backgroundColor: bgColor }}
		>
			{text}
		</li>
	);
}
