import { Component, useEffect, useState } from "react"
import ProjectCard from "../components/projects/Card"
import { Project } from "../pages/api/projects"
import styles from "../styles/projects/Projects.module.css"

function Projects1() {

    useEffect(() => {
        const getCards = async () => {
            const fetchData = await fetch(window.location.origin + "/api/projects")
            const data: Project[] = await fetchData.json()

            const cards: JSX.Element[] = []
            data.forEach((d, i) => {
                cards.push(
                    <ProjectCard
                        name={d.name}
                        desc={d.description}
                        languages={d.languages}
                        link={d.link}
                        imgSrc={d.imgSrc}
                        tools={d.tools}
                        key={i}
                    />
                )
            })

            return (
                <>
                    {cards}
                </>
            )
        }

        getCards().then(cards => {
            setCards(cards)
        })
    })

    const [cards, setCards] = useState<JSX.Element>()

    return (
        <div className={styles.cards}>
            {cards}
        </div>
    )
}

interface ProjectsState {
    cards: JSX.Element
}

export default class Projects extends Component {

    state: ProjectsState = { cards: <></> }

    componentDidMount() {
        const renderCards = async () => {
            const fetchData = await fetch(window.location.origin + "/api/projects")
            const data: Project[] = await fetchData.json()

            const cards: JSX.Element[] = []
            data.forEach((d, i) => {
                cards.push(
                    <ProjectCard
                        name={d.name}
                        desc={d.description}
                        languages={d.languages}
                        link={d.link}
                        imgSrc={d.imgSrc}
                        tools={d.tools}
                        key={i}
                    />
                )
            })

            this.setState({
                cards:
                    <>
                        {cards}
                    </>
            })
        }

        renderCards()
    }

    render() {
        return (
            <div className={styles.cards}>
                {this.state.cards}
            </div>
        )
    }
}