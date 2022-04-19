import { Project } from "../pages/api/projects";
import { electronAutodrawerDesc, portfolioDesc, w2gBuilderDsBotDesc, webDevelopmentCourseDesc } from "./projectsdesc";
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
        link: "/projects/w2gbuilderdsbot",
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
        link: "/projects/portfolio",
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
        link: "/projects/webcourse",
        date: dateTime(4, 1, 2022)
    },
    {
        name: "Electron - Autodrawer",
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
        date: dateTime(2, 7, 2021)
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

function dateTime(day: number, month: number, year: number) {
    const date = new Date()
    date.setDate(day)
    date.setMonth(month)
    date.setFullYear(year)

    return date
}