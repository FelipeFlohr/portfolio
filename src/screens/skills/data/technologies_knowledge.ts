import type { TechnologiesStack } from "../../../types/Technology";

import csLogo from "../../../assets/techs/cs_logo_tech.png"
import cssLogo from "../../../assets/techs/css_logo_tech.png"
import sassLogo from "../../../assets/techs/sass_logo_tech.png"
import dartLogo from "../../../assets/techs/dart_logo_tech.png"
import htmlLogo from "../../../assets/techs/html_logo_tech.png"
import javaLogo from "../../../assets/techs/java_logo_tech.png"
import jsLogo from "../../../assets/techs/js_logo_tech.png"
import mdLogo from "../../../assets/techs/markdown_logo_tech.png"
import pyLogo from "../../../assets/techs/python_logo_tech.png"
import tsLogo from "../../../assets/techs/ts_logo_tech.png"
import phpLogo from "../../../assets/techs/php_logo_tech.png"

import nodeLogo from "../../../assets/techs/node_logo_tech.png"
import expressLogo from "../../../assets/techs/express_logo_tech.png"
import jwtLogo from "../../../assets/techs/jwt_logo_tech.png"
import nextLogo from "../../../assets/techs/next_logo_tech.png"
import nestLogo from "../../../assets/techs/nestjs_logo_tech.png"
import socketIoLogo from "../../../assets/techs/socketio_logo_tech.png"
import springLogo from "../../../assets/techs/spring_logo_tech.png"

const techStack: TechnologiesStack = {
    languages: [
        {
            imagePath: tsLogo,
            name: "TypeScript",
            stars: 3,
            backgroundColor: "#314575",
            whiteForeground: true
        },
        {
            imagePath: jsLogo,
            name: "JavaScript",
            stars: 3,
            backgroundColor: "#bf9300",
        },
        {
            imagePath: htmlLogo,
            name: "HTML",
            stars: 3,
            backgroundColor: "#942d0a",
            whiteForeground: true
        },
        {
            imagePath: cssLogo,
            name: "CSS",
            stars: 3,
            backgroundColor: "#01366e",
            whiteForeground: true
        },
        {
            imagePath: mdLogo,
            name: "Markdown",
            stars: 3,
            backgroundColor: "#FFF",
        },
        {
            imagePath: dartLogo,
            name: "Dart",
            stars: 3,
            backgroundColor: "#3d6f7a",
            whiteForeground: true
        },
        {
            imagePath: javaLogo,
            name: "Java",
            stars: 2,
            backgroundColor: "#000",
            whiteForeground: true
        },
        {
            imagePath: pyLogo,
            name: "Python",
            stars: 2,
            backgroundColor: "#132b69",
            whiteForeground: true
        },
        {
            imagePath: sassLogo,
            name: "SASS",
            stars: 1,
            backgroundColor: "#6e0154",
            whiteForeground: true,
        },
        {
            imagePath: phpLogo,
            name: "PHP",
            stars: 1,
            backgroundColor: "#4d566e",
            whiteForeground: true
        },
        {
            imagePath: csLogo,
            name: "C#",
            stars: 1,
            backgroundColor: "#234f29",
            whiteForeground: true
        },
    ],
    backend: [
        {
            imagePath: nodeLogo,
            name: "Node.js",
            backgroundColor: "#cfc1c0",
            stars: 3,
        },
        {
            imagePath: expressLogo,
            name: "Express.js",
            backgroundColor: "#FFF",
            stars: 3,
        },
        {
            imagePath: jwtLogo,
            name: "JWT",
            backgroundColor: "#613936",
            stars: 3,
            whiteForeground: true,
            alternativeAlt: "JWT (Json Web Tokens) Logo"
        },
        {
            imagePath: nextLogo,
            name: "Next.js",
            backgroundColor: "#FFF",
            stars: 2,
        },
        {
            imagePath: nestLogo,
            name: "Nest.js",
            backgroundColor: "#520505",
            stars: 2,
            whiteForeground: true
        },
        {
            imagePath: springLogo,
            name: "Spring",
            backgroundColor: "#055206",
            stars: 2,
            whiteForeground: true
        },
        {
            imagePath: socketIoLogo,
            name: "Socket.io",
            backgroundColor: "#000",
            stars: 2,
            whiteForeground: true
        },
    ],
    frontend: [],
    misc: [],
    mobile: [],
}

export default techStack