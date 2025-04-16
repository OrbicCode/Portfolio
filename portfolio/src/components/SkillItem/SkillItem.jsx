import styles from './SkillItem.module.css'

export default function SkillItem({ text }) {
    return <li className={styles.item}>{text}</li>
}