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
                <Image src={props.imgSrc} alt="Project thumbnail" width={156} height={156} />
            )
        }
    }

    const renderLanguages = () => {
        let languages = ""
        props.languages.forEach((lang, i) => {
           if (i == props.languages.length -1) {
               languages = languages + lang.name
           } else {
               languages = languages + lang.name + ", "
           }
        })

        return (
            <span><h4>Languages: </h4>{languages}</span>
        )
    }

    return (
        <Link href={props.link}>
            <div className={styles.card}>
                <div className={styles.img}>
                    {renderImage()}
                </div>
                <div className={styles.text}>
                    <h3>
                        {props.name}
                    </h3>
                    <p className={styles.desc}>
                        {props.desc}
                    </p>
                    <div className={styles.techs}>
                        <div className={styles.languages}>
                            { renderLanguages() }
                        </div>
                        <div className={styles.tools}>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}