import { Component } from "react"
import List from "../components/projects/List"
import styles from "../styles/projects/Projects.module.css"

export default class Projects extends Component {

    render() {
        return (
            <>
                <header>
                    <h1>My Projects</h1>
                    <h4>The list below contains all my projects:</h4>
                </header>
                <section className={styles["list-container"]}>
                    <List />
                </section>
            </>
        )
    }
}