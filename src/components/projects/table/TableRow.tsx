import Link from "next/link"
import styles from "../../../styles/projects/table/TableRow.module.css"

interface TableDataProps {
    projectLink: string,
    projectName: string,
    projectDesc: string,
    projectTechs: JSX.Element,
    rowColor: "dark" | "light",
    projectDescClassName?: string
}

export default function TableRow(props: TableDataProps) {
    return (
        <>
            <Link href={props.projectLink}>
                <tr className={styles.tr} style={{ backgroundColor: props.rowColor == "light" ? "#2d2a31" : "#221e26" }}>
                    <td className={styles.name}><span>{props.projectName}</span></td>
                    <td className={styles.desc}><div><span>{props.projectDesc}</span></div></td>
                    <td><div>{props.projectTechs}</div>
                    </td>
                </tr>
            </Link>
        </>
    )
}