import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import styles from "../../styles/projects/ProjectLayout.module.css";

interface ProjectLayoutProps {
    children: any
}

export default function ProjectLayout(props: ProjectLayoutProps) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    useEffect(() => {
        const projectPath = window.location.pathname
        const project = projects.find(project => project.link == projectPath)

        if (project) {
            setTitle(project.name)
            setDesc(project.description)
        }
    }, [])

    return (
        <>
            <h1 className={styles.h1}>{title}</h1>
            <h5 className={styles.h5}><i>{desc}</i></h5>
            <article>
                {props.children}
            </article>
        </>
    )
}