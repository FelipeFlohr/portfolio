import { Component } from "react";
import { Project } from "../../pages/api/projects";
import styles from "../../styles/projects/List.module.css";
import Checkbox from "../widgets/Checkbox";
import Dropdown from "../widgets/Dropdown";
import InputText from "../widgets/InputText";
import ListTable from "./ListTable";

interface ListState {
    table: JSX.Element,
    currentProjects: Project[]
}

interface ListProps {
    projects: Project[]
}

export default class List extends Component<ListProps, ListState> {

    state: ListState = { table: <ListTable projects={this.props.projects} />, currentProjects: this.props.projects }

    constructor(props: ListProps) {
        super(props)
    }

    private getDropdownTechs() {
        const techs = new Set<string>()
            const techsElements: JSX.Element[] = []

            this.props.projects.forEach(project => {
                project.technologies.forEach(tech => {
                    techs.add(tech.name)
                })
            })

            techs.forEach(tech => {
                let techId: number = 0
                tech.split("").forEach(char => techId += char.charCodeAt(0))

                techsElements.push(
                    <Checkbox key={techId} startChecked={true} onChange={() => this.setFilters()}>{tech}</Checkbox>
                )
            })

            return techsElements
    }

    private setFilters() {
        let projects: Project[] = this.props.projects

        const filterDropdown = () => {
            const techsElements = document.querySelectorAll(`.${styles["techs-dropdown"]} > div > div > div`)

            techsElements.forEach(element => {
                const techName = element.querySelector("label")?.innerText.trim()
                const techChecked = element.querySelector("input")?.checked

                if (techName != undefined && techChecked != undefined) {
                    if (!techChecked) {
                        projects = projects.filter(project => {
                            return project.technologies.every(tech => tech.name != techName)
                        })
                    }
                }
            })
        }
        const filterProjectName = () => {
            const projectNameDiv = document.querySelector(`.${styles["project-name-filter"]} > div`)
            const projectNameValue = projectNameDiv?.querySelector("input")?.value.trim()

            if (projectNameValue == undefined) return
            if (projectNameValue == "") return
            projects = projects.filter(project => {
                return project.name.toLowerCase().includes(projectNameValue.toLowerCase())
            })

            console.log("Called: ", projectNameValue)
            console.log(projects)
        }

        filterDropdown()
        filterProjectName()
        this.setState({ currentProjects: projects, table: <ListTable projects={projects} /> })
    }

    render() {
        return (
            <div className={styles.container}>
                <h5 style={{ margin: "0", marginBottom: "10px" }}>Filters:</h5>
                <div className={styles.filters}>
                    <div className={styles["project-name-filter"]}>
                        <InputText label="Project name" onInput={() => this.setFilters()} />
                    </div>
                    <div className={styles["techs-dropdown"]}>
                        <Dropdown label="Technologies">
                            {this.getDropdownTechs()}
                        </Dropdown>
                    </div>
                </div>
                <div className={styles.content}>
                    {this.state.table}
                </div>
            </div>
        )
    }
}