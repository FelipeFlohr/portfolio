import Link from "next/link";
import { Project } from "../../pages/api/projects";

interface ListTableProps {
    projects: Project[]
}

export default function ListTable(props: ListTableProps) {

    const renderContent = () => {
        return props.projects.map((project, i) => {
            return (
                <tr key={i}>
                    <td><Link href={project.link}>{project.name}</Link></td>
                    <td>{project.description}</td>
                    <td>Techs ficam aqui.</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <tbody>
                {renderContent()}
            </tbody>
        </table>
    )
}