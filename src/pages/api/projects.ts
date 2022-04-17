import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.send(projects)
}

const techs = {
    java: {
        name: "Java",
        color: "#e67410"
    },
    python: {
        name: "Python",
        color: "#1772d4"
    },
    html: {
        name: "HTML",
        color: "#c74714"
    },
    typescript: {
        name: "TypeScript",
        color: "#1754a3"
    },
    javascript: {
        name: "JavaScript",
        color: "#fbff00"
    },
    css: {
        name: "CSS",
        color: "#24006b"
    },
    scss: {
        name: "SASS",
        color: "#d128a4"
    },
    docker: {
        name: "Docker",
        color: "#1f171d"
    },
    react: {
        name: "React",
        color: "#2293b3"
    },
    next: {
        name: "Next",
        color: "#050505"
    },
    mysql: {
        name: "MySQL"
    },
    spring: {
        name: "Spring Framework",
        color: "#3a962a"
    },
    selenium: {
        name: "Selenium",
        color: "#18a300"
    },
    socketio: {
        name: "Socket.IO",
        color: "#3e403d"
    }
}

const projects: Project[] = [
    {
        name: "Watch2Gether Builder - Discord Bot",
        description: "Watch2Gether Builder description",
        technologies: [
            techs.java, 
            techs.typescript, 
            techs.css, 
            techs.javascript,
            techs.html,
            techs.docker,
            techs.spring,
            techs.selenium,
            techs.socketio
        ],
        link: "/projects/w2gbuilderdsbot",
        date: dateTime(3, 2, 2022)
    },
    {
        name: "Portfolio",
        description: "My Portfolio",
        technologies: [
            techs.typescript,
            techs.css,
            techs.react,
            techs.next
        ],
        link: "/projects/portfolio",
        date: dateTime(8, 4, 2022)
    }
]

function dateTime(day: number, month: number, year: number) {
    const date = new Date()
    date.setDate(day)
    date.setMonth(month)
    date.setFullYear(year)

    return date
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
    link?: string,
    color?: string
    icon?: JSX.Element
}