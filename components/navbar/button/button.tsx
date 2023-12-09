import Link from 'next/link'
import styles from './style.module.css'

export const Button = () => {

    return (
        <Link href="/" className={styles.button}>
            <span className={styles.buttonIcon}>
            <i className={"fa-solid fa-feather"}></i>
            </span>
            <span className={styles.text}> Post </span>
        </Link>
    )
}