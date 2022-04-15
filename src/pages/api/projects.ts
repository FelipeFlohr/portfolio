import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.send(projects)
}

const languages = {
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
    }
}

const toolsLibsFrameworks = {
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
        languages: [
            languages.java, 
            languages.typescript, 
            languages.css, 
            languages.javascript,
            languages.html
        ],
        tools: [
            toolsLibsFrameworks.docker,
            toolsLibsFrameworks.spring,
            toolsLibsFrameworks.selenium,
            toolsLibsFrameworks.socketio
        ],
        link: "/projects/w2gbuilderdsbot"
    }
]

export interface Project {
    name: string,
    description: string,
    languages: Technology[],
    tools?: Technology[],
    link: string,
    imgSrc?: string
}

export interface Technology {
    name: string,
    link?: string,
    color?: string
}