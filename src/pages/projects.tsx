import { Component } from "react"
import List from "../components/projects/List"
import styles from "../styles/projects/Projects.module.css"
import { Project } from "./api/projects"

interface ProjectsState {
    projects?: Project[]
}

export default class Projects extends Component {

    state: ProjectsState = {}

    componentDidMount() {
        const getData = async () => {
            const fetchData = await fetch(window.location.origin + "/api/projects")
            const jsonData: Project[] = await fetchData.json()

            return jsonData
        }

        getData()
            .then(data => this.setState({ projects: data }))
    }

    private renderList() {
        if (this.state.projects) {
            return <List projects={this.state.projects} />
        } else {
            return <h4>Project list unavailable.</h4>
        }
    }

    render() {
        return (
            <>
                <header className={styles.header}>
                    <h1>My Projects</h1>
                    <h4>The list below contains all my projects:</h4>
                </header>
                <div className={styles["list-container"]}>
                    {this.renderList()}
                </div>
            </>
        )
    }
}