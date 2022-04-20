import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { Project } from "../../pages/api/projects";
import styles from "../../styles/projects/ProjectLayout.module.css";
import TechIcon from "./table/TechIcon";

interface ProjectLayoutProps {
    children: any
}

export default function ProjectLayout(props: ProjectLayoutProps) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [project, setProject] = useState<Project>()

    useEffect(() => {
        const projectPath = window.location.pathname
        const thisProject = projects.find(project => project.link == projectPath)
        setProject(thisProject)

        if (thisProject) {
            setTitle(thisProject.name)
            setDesc(thisProject.description)
        }
    }, [])

    const renderTechs = () => {
        if (project) {
            const techsSorted = project.technologies.sort((el1, el2) => {
                return el1.name.localeCompare(el2.name)
            })
            const techs = techsSorted.map((tech, i) => (
                <TechIcon technology={tech} key={i} />
            ))

            return (
                <>
                    {techs}
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <div className={styles["content-wrapper"]}>
            <div className={styles.content}>
                <h1 className={styles.h1}>{title}</h1>
                <h5 className={styles.h5}>{desc}</h5>
                <div className={styles.techs}>{renderTechs()}</div>
                <hr className={styles.hr} />
                <article className={styles.article}>
                    {props.children}
                </article>
            </div>
        </div>
    )
}