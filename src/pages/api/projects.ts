import { NextApiRequest, NextApiResponse } from "next";
import { CssIcon, DockerIcon, HtmlIcon, JavaIcon, JavascriptIcon, MySqlIcon, NextIcon, PythonIcon, ReactIcon, SassIcon, SeleniumIcon, SocketIoIcon, SpringIcon, TypescriptIcon } from "../../components/icons/Icons";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.send(projects)
}

const techs = {
    java: {
        name: "Java",
        color: "#e67410",
        icon: JavaIcon(),
        link: "https://www.oracle.com/java/technologies/downloads/"
    },
    python: {
        name: "Python",
        color: "#1772d4",
        icon: PythonIcon(),
        link: "https://www.python.org/"
    },
    html: {
        name: "HTML",
        color: "#c74714",
        icon: HtmlIcon(),
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    typescript: {
        name: "TypeScript",
        color: "#1754a3",
        icon: TypescriptIcon(),
        link: "https://www.typescriptlang.org/"
    },
    javascript: {
        name: "JavaScript",
        color: "#fbff00",
        icon: JavascriptIcon(),
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    css: {
        name: "CSS",
        color: "#24006b",
        icon: CssIcon(),
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    scss: {
        name: "SASS",
        color: "#d128a4",
        icon: SassIcon(),
        link: "https://sass-lang.com/"
    },
    docker: {
        name: "Docker",
        color: "#1f171d",
        icon: DockerIcon(),
        link: "https://www.docker.com/"
    },
    react: {
        name: "React",
        color: "#2293b3",
        icon: ReactIcon(),
        link: "https://reactjs.org/"
    },
    next: {
        name: "Next",
        color: "#050505",
        icon: NextIcon(),
        link: "https://nextjs.org/"
    },
    mysql: {
        name: "MySQL",
        color: "#00163b",
        icon: MySqlIcon(),
        link: "https://www.mysql.com/"
    },
    spring: {
        name: "Spring Framework",
        color: "#3a962a",
        icon: SpringIcon(),
        link: "https://spring.io/"
    },
    selenium: {
        name: "Selenium",
        color: "#18a300",
        icon: SeleniumIcon(),
        link: "https://www.selenium.dev/"
    },
    socketio: {
        name: "Socket.IO",
        color: "#3e403d",
        icon: SocketIoIcon(),
        link: "https://socket.io/"
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

export function getTechIcon(technology: Technology) {
    const techsArray = Object.values(techs)
    const tech = techsArray.find(tech => tech.name == technology.name)

    return tech?.icon
}

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
    link: string,
    color: string
    icon: JSX.Element
}