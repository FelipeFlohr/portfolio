import { Project, Technology } from "../../pages/api/projects";
import styles from "../../styles/projects/List.module.css";
import Checkbox from "../widgets/Checkbox";
import Dropdown from "../widgets/Dropdown";
import InputText from "../widgets/InputText";

interface ListProps {
    projects: Project[]
}

export default function List(props: ListProps) {

    const getDropdownTechs = () => {
        const techs = new Set<string>()
        const techsElements: JSX.Element[] = []

        props.projects.forEach(project => {
            project.languages.forEach(lang => {
                techs.add(lang.name)
            })

            project.tools?.forEach(tool => {
                techs.add(tool.name)
            })
        })

        techs.forEach(tech => {
            techsElements.push(
                <Checkbox>{tech}</Checkbox>
            )
        })

        return techsElements
    }

    return (
        <div className={styles.container}>
            <h5 style={{margin: "0", marginBottom: "10px"}}>Filters:</h5>
            <div className={styles.filters}>
                <div className={styles["project-name-filter"]}>
                    <InputText label="Project name" />
                </div>
                <div className={styles["techs-dropdown"]}>
                    <Dropdown label="Technologies">
                        {getDropdownTechs()}
                    </Dropdown>
                </div>
            </div>
            <div className={styles.content}>
                Content goes here, I guess...
            </div>
        </div>
    )
}