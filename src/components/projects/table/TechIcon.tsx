import Link from "next/link"
import { getTechIcon, Technology } from "../../../pages/api/projects"
import styles from "../../../styles/projects/table/TechIcon.module.css"

interface TechIconProps {
    technology: Technology
}

export default function TechIcon(props: TechIconProps) {

    return (
        <Link href={props.technology.link} passHref={false}>
            <div className={styles.icon} style={{ color: "red" }} title={props.technology.name}>
                {getTechIcon(props.technology)}
            </div>
        </Link>
    )
}