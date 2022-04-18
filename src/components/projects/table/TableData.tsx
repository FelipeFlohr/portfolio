import Link from "next/link"
import styles from "../../../styles/projects/table/TableData.module.css"

interface TableDataProps {
    projectLink: string,
    projectName: string,
    projectDesc: string,
    projectTechs: JSX.Element,
    rowColor: "dark" | "light",
    projectDescClassName?: string
}

export default function TableData(props: TableDataProps) {
    return (
        <>
            <Link href={props.projectLink}>
                <tr className={styles.tr} style={{backgroundColor: props.rowColor == "light" ? "#77679c" : "#6c54a5"}}>
                    <td>{props.projectName}</td>
                    <td className={`${styles.desc} ${props.projectDescClassName}`}>{props.projectDesc}</td>
                    <td>{props.projectTechs}</td>
                </tr>
            </Link>
        </>
    )
}