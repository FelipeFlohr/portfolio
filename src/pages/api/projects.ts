import { NextApiRequest, NextApiResponse } from "next";
import { AngularIcon, BabelIcon, BootstrapIcon, CssIcon, DockerIcon, ElectronIcon, ExpressIcon, FirebaseIcon, GulpIcon, HtmlIcon, JavaIcon, JavascriptIcon, MongoDbIcon, MySqlIcon, NextIcon, NodeIcon, PandasIcon, PostgresIcon, PythonIcon, ReactIcon, SassIcon, SeleniumIcon, SocketIoIcon, SpringIcon, TailwindIcon, TypescriptIcon, VueJsIcon, WebpackIcon } from "../../components/icons/Icons";

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
    },
    nodejs: {
        name: "Node.js",
        color: "#6dde8b",
        icon: NodeIcon(),
        link: "https://nodejs.org/"
    },
    gulp: {
        name: "Gulp",
        color: "#b86767",
        icon: GulpIcon(),
        link: "https://gulpjs.com/"
    },
    babel: {
        name: "Babel",
        color: "#d1c92c",
        icon: BabelIcon(),
        link: "https://babeljs.io/"
    },
    webpack: {
        name: "Webpack",
        color: "#98d3eb",
        icon: WebpackIcon(),
        link: "https://webpack.js.org/"
    },
    bootstrap: {
        name: "Bootstrap",
        color: "#0037ff",
        icon: BootstrapIcon(),
        link: "https://getbootstrap.com/"
    },
    tailwind: {
        name: "TailwindCSS",
        color: "#708cba",
        icon: TailwindIcon(),
        link: "https://tailwindcss.com/"
    },
    angular: {
        name: "Angular",
        color: "#a15050",
        icon: AngularIcon(),
        link: "https://angular.io/"
    },
    vuejs: {
        name: "Vue.js",
        color: "#55bd7e",
        icon: VueJsIcon(),
        link: "https://vuejs.org/"
    },
    firebase: {
        name: "Firebase",
        color: "#daff75",
        icon: FirebaseIcon(),
        link: "https://firebase.google.com/"
    },
    electron: {
        name: "Electron",
        color: "#bfd6db",
        icon: ElectronIcon(),
        link: "https://www.electronjs.org/"
    },
    postgres: {
        name: "PostgresSQL",
        color: "#5f7f87",
        icon: PostgresIcon(),
        link: "https://www.postgresql.org/"
    },
    mongodb: {
        name: "MongoDB",
        color: "#00ff59",
        icon: MongoDbIcon(),
        link: "https://www.mongodb.com/"
    },
    express: {
        name: "Express",
        color: "#fff",
        icon: ExpressIcon(),
        link: "https://expressjs.com/"
    },
    pandas: {
        name: "Pandas",
        color: "#fff",
        icon: PandasIcon(),
        link: "https://pandas.pydata.org/"
    }
}

const projects: Project[] = [
    {
        name: "Watch2Gether Builder - Discord Bot",
        description: "TODO",
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
        description: "TODO",
        technologies: [
            techs.nodejs,
            techs.typescript,
            techs.css,
            techs.react,
            techs.next
        ],
        link: "/projects/portfolio",
        date: dateTime(8, 4, 2022)
    },
    {
        name: "Web Development Course",
        description: "TODO",
        technologies: [
            techs.nodejs,
            techs.javascript,
            techs.html,
            techs.css,
            techs.gulp,
            techs.babel,
            techs.scss,
            techs.typescript,
            techs.webpack,
            techs.bootstrap,
            techs.react,
            techs.next,
            techs.tailwind,
            techs.firebase,
            techs.vuejs,
            techs.angular,
            techs.electron,
            techs.express,
            techs.postgres,
            techs.mongodb
        ],
        link: "/projects/webcourse",
        date: dateTime(4, 1, 2022)
    },
    {
        name: "Electron - Autodrawer",
        description: "TODO",
        technologies: [
            techs.nodejs,
            techs.typescript,
            techs.html,
            techs.javascript,
            techs.scss,
            techs.gulp,
            techs.babel,
            techs.webpack,
            techs.bootstrap,
            techs.electron
        ],
        link: "/projects/electronautodrawer",
        date: dateTime(8, 3, 2022)
    },
    {
        name: "Node - Autodrawer",
        description: "TODO",
        technologies: [
            techs.nodejs,
            techs.javascript,
            techs.gulp,
            techs.babel,
            techs.typescript,
            techs.bootstrap
        ],
        link: "/projects/nodeautodrawer",
        date: dateTime(14, 12, 2021)
    },
    {
        name: ".txt Video Opener",
        description: "TODO",
        technologies: [
            techs.html,
            techs.css,
            techs.javascript
        ],
        link: "/projects/txtvideoopener",
        date: dateTime(9, 7, 2021)
    },
    {
        name: "Java Course",
        description: "TODO",
        technologies: [
            techs.java,
            techs.spring,
            techs.mysql
        ],
        link: "/projects/javacourse",
        date: dateTime(16, 8, 2021)
    },
    {
        name: "Watch2Gether Builder - Java",
        description: "TODO",
        technologies: [
            techs.java,
            techs.selenium
        ],
        link: "/projects/w2gbuilderjava",
        date: dateTime(2,7, 2021)
    },
    {
        name: "Podcast Render",
        description: "TODO",
        technologies: [
            techs.python,
            techs.java
        ],
        link: "/projects/podcastrender",
        date: dateTime(27, 8, 2021)
    },
    {
        name: "Frame Extractor",
        description: "TODO",
        technologies: [
            techs.java
        ],
        link: "/projects/frameextractor",
        date: dateTime(1, 7, 2021)
    },
    {
        name: "Uno - Java",
        description: "TODO",
        technologies: [
            techs.java
        ],
        link: "/projects/unojava",
        date: dateTime(6, 11, 2021)
    },
    {
        name: "Uno - Python",
        description: "TODO",
        technologies: [
            techs.python
        ],
        link: "/projects/unopython",
        date: dateTime(30, 3, 2021)
    },
    {
        name: "Python - Autodrawer",
        description: "TODO",
        technologies: [
            techs.python
        ],
        link: "/projects/pythonautodrawer",
        date: dateTime(9, 6, 2021)
    },
    {
        name: "Python - Brasileirão",
        description: "TODO",
        technologies: [
            techs.python,
            techs.pandas,
            techs.selenium
        ],
        link: "/projects/pythonbrasileirao",
        date: dateTime(19, 4, 2021)
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