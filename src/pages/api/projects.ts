import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../data/projects";
import { techs } from "../../data/technologies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send(projects)
}

export function getTechIcon(technology: Technology) {
    const techsArray = Object.values(techs)
    const tech = techsArray.find(tech => tech.name == technology.name)

    return tech?.icon
}

export interface Project {
    name: string,
    description: string,
    technologies: Technology[]
    link: string,
    date: Date
}

export interface Technology {
    name: string,
    link: string,
    color: string
    icon: JSX.Element
}