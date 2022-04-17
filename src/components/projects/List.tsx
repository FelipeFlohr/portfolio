import { Project } from "../../pages/api/projects";
import styles from "../../styles/projects/List.module.css";
import Dropdown from "../widgets/Dropdown";
import InputText from "../widgets/InputText";

interface ListProps {
    projects?: Project[]
}

export default function List(props: ListProps) {
    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles["project-name-filter"]}>
                    <InputText label="Project name" />
                </div>
                <div className={styles["techs-dropdown"]}>
                    <Dropdown label="Technologies">
                        <input type="checkbox" />
                        <label>Teste</label>
                    </Dropdown>
                </div>
            </div>
            <div className={styles.content}>
                Content goes here, I guess...
            </div>
        </div>
    )
}