import { Project } from "../pages/api/projects";
import { electronAutodrawerDesc, frameExtractorDesc, javaCourseDesc, nodeAutodrawerDesc, podcastRenderDesc, portfolioDesc, pythonAutodrawerDesc, pythonBrasileiraoDesc, txtVideoOpenerDesc, unoJavaDesc, unoPythonDesc, w2gBuilderDsBotDesc, w2gBuilderJavaDesc, webDevelopmentCourseDesc } from "./projectsdesc";
import { techs } from "./technologies";

export const projects: Project[] = [
    {
        name: "Watch2Gether Builder - Discord Bot",
        description: w2gBuilderDsBotDesc,
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
        link: "https://github.com/FelipeFlohr/Watch2Gether-DiscordBuilder",
        date: dateTime(3, 2, 2022)
    },
    {
        name: "Portfolio",
        description: portfolioDesc,
        technologies: [
            techs.nodejs,
            techs.typescript,
            techs.css,
            techs.react,
            techs.next
        ],
        link: "https://github.com/FelipeFlohr/portfolio",
        date: dateTime(8, 4, 2022)
    },
    {
        name: "Web Development Course",
        description: webDevelopmentCourseDesc,
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
        link: "https://github.com/FelipeFlohr/curso-cod3r-webmoderno",
        date: dateTime(4, 1, 2022)
    },
    {
        name: "Autodrawer - Electron",
        description: electronAutodrawerDesc,
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
        link: "https://github.com/FelipeFlohr/electron-autodrawer",
        date: dateTime(8, 3, 2022)
    },
    {
        name: "Autodrawer - Node",
        description: nodeAutodrawerDesc,
        technologies: [
            techs.nodejs,
            techs.javascript,
            techs.gulp,
            techs.babel,
            techs.typescript,
            techs.bootstrap
        ],
        link: "https://github.com/FelipeFlohr/node-autodrawer",
        date: dateTime(14, 12, 2021)
    },
    {
        name: ".txt Video Opener",
        description: txtVideoOpenerDesc,
        technologies: [
            techs.html,
            techs.css,
            techs.javascript
        ],
        link: "https://github.com/FelipeFlohr/txt-video-opener",
        date: dateTime(9, 7, 2021)
    },
    {
        name: "Java Course",
        description: javaCourseDesc,
        technologies: [
            techs.java,
            techs.spring,
            techs.mysql
        ],
        link: "https://github.com/FelipeFlohr/curso-cod3r-java",
        date: dateTime(16, 8, 2021)
    },
    {
        name: "Watch2Gether Builder - Java",
        description: w2gBuilderJavaDesc,
        technologies: [
            techs.java,
            techs.selenium
        ],
        link: "https://github.com/FelipeFlohr/Watch2Gether-builder-Java",
        date: dateTime(2, 7, 2021)
    },
    {
        name: "Podcast Render",
        description: podcastRenderDesc,
        technologies: [
            techs.python,
            techs.java
        ],
        link: "https://github.com/FelipeFlohr/podcast-render",
        date: dateTime(27, 8, 2021)
    },
    {
        name: "Frame Extractor",
        description: frameExtractorDesc,
        technologies: [
            techs.java
        ],
        link: "https://github.com/FelipeFlohr/frame-extractor",
        date: dateTime(1, 7, 2021)
    },
    {
        name: "Uno - Java",
        description: unoJavaDesc,
        technologies: [
            techs.java
        ],
        link: "https://github.com/FelipeFlohr/UnoJava",
        date: dateTime(6, 11, 2021)
    },
    {
        name: "Uno - Python",
        description: unoPythonDesc,
        technologies: [
            techs.python
        ],
        link: "https://github.com/FelipeFlohr/unopython",
        date: dateTime(30, 3, 2021)
    },
    {
        name: "Autodrawer - Python",
        description: pythonAutodrawerDesc,
        technologies: [
            techs.python
        ],
        link: "https://github.com/FelipeFlohr/python-autodrawer",
        date: dateTime(9, 6, 2021)
    },
    {
        name: "Python - Brasileirão",
        description: pythonBrasileiraoDesc,
        technologies: [
            techs.python,
            techs.pandas,
            techs.selenium
        ],
        link: "https://github.com/FelipeFlohr/Python-Brasileirao",
        date: dateTime(19, 4, 2021)
    }
]

function dateTime(day: number, month: number, year: number) {
    const date = new Date()
    date.setDate(day)
    date.setMonth(month)
    date.setFullYear(year)

    return date
}