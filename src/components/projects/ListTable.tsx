import React from "react"
import { Project } from "../../pages/api/projects"
import styles from "../../styles/projects/ListTable.module.css"
import TableRow from "./table/TableRow"
import TechIcon from "./table/TechIcon"

interface ListTableProps {
    projects: Project[]
}

export default function ListTable(props: ListTableProps) {

    const renderContent = () => {
        const projectsSorted = props.projects.sort((pj1, pj2) => {
            return new Date(pj2.date).getTime() - new Date(pj1.date).getTime()
        })

        return projectsSorted.map((project, i) => {
            return (
                <TableRow
                    key={i}
                    projectName={project.name}
                    projectDesc={project.description}
                    projectLink={project.link}
                    projectTechs={renderTechs(project)}
                    rowColor={i % 2 == 0 ? "light" : "dark"}
                    projectDescClassName={styles.desc} />
            )
        })
    }

    const renderTechs = (project: Project) => {
        const techsSorted = project.technologies.sort((el1, el2) => {
            return el1.name.localeCompare(el2.name)
        })
        const techs = techsSorted.map((tech, i) => (
            <TechIcon technology={tech} key={i} />
        ))

        return (
            <div className={styles.tech}>
                {techs}
            </div>
        )
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Project name:</th>
                    <th className={styles.desc}>Project description:</th>
                    <th>Technologies:</th>
                </tr>
            </thead>
            <tbody>
                {renderContent()}
            </tbody>
        </table>
    )
}