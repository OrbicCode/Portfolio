import styles from "./Contact.module.css";

export default function Contact({ id }) {
	return (
		<section id={id} className={`${styles.contact} section`}>
			<div className='container'>
				<h2 className={styles.title}>Contact</h2>
				<h3 className={styles.available}>Available for hire</h3>
				<p className={styles.hook}>
					Let's make something cool together
					<br />
					<br />
					Drop me an email or send me a message on LinkedIn
				</p>
				<a href='mailto:orbiccode@gmail.com' className={styles.email}>
					orbiccode@gmail.com
				</a>
				<div className={styles.linkContainer}>
					<a
						href='https://www.linkedin.com/in/james-o-kane-570b71314/'
						target='_blank'
						className={styles.links}
					>
						LinkedIn
					</a>
					<a
						href='https://github.com/Orbiccode'
						target='_blank'
						className={styles.links}
					>
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
