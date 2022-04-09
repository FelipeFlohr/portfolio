import { Component, ReactNode } from "react"
import styles from "../../styles/navbar/Navbar.module.scss"

export default class PathBar extends Component {
    render(): ReactNode {
        return (
            <div className={styles.pathbar}>
                <span className={styles.path}>C:/users/felipe/desktop/random/portfolio/pages/home.html</span>
                <span className={`${styles["text-cursor"]} ${styles["text-cursor-anim"]}`}></span>
            </div>
        )
    }
}