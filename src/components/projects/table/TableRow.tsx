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
            <Link href={props.projectLink} passHref={false}>
                <tr className={styles.tr} style={{ backgroundColor: props.rowColor == "light" ? "#502e75" : "#462768" }}>
                    <td className={styles.name}><span>{props.projectName}</span></td>
                    <td className={styles.desc}><div><span>{props.projectDesc}</span></div></td>
                    <td><div>{props.projectTechs}</div>
                    </td>
                </tr>
            </Link>
        </>
    )
}