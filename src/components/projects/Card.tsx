import Image from "next/image"
import Link from "next/link"
import { Technology } from "../../pages/api/projects"
import styles from "../../styles/projects/Card.module.css"

interface CardProps {
    name: string,
    desc: string,
    link: string,
    languages: Technology[]
    tools?: Technology[]
    imgSrc?: string
}

export default function ProjectCard(props: CardProps) {

    const renderImage = () => {
        if (props.imgSrc != null) {
            return (
                <Image src={props.imgSrc} alt="Project thumbnail" />
            )
        }
    }

    return (
        <Link href={props.link}>
            <div className={styles.card}>
                {renderImage()}
                <h3>
                    {props.name}
                </h3>
                <p className={styles.desc}>
                    {props.desc}
                </p>
                <div className={styles.techs}>
                    <div className={styles.languages}>

                    </div>
                    <div className={styles.tools}>

                    </div>
                </div>
            </div>
        </Link>
    )
}