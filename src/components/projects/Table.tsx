import React from "react"
import { getTechIcon, Project } from "../../pages/api/projects"
import styles from "../../styles/projects/Table.module.css"
import TableData from "./table/TableData"
import TechIcon from "./table/TechIcon"

interface ListTableProps {
    projects: Project[]
}

export default function ListTable(props: ListTableProps) {

    const renderContent = () => {
        return props.projects.map((project, i) => {
            return (
                <TableData
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
        const techs = project.technologies.map(tech => (
            <TechIcon technology={tech} />
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
                <td>Project name:</td>
                <td className={styles.desc}>Project description:</td>
                <td>Technologies:</td>
            </thead>
            <tbody>
                {renderContent()}
            </tbody>
        </table>
    )
}