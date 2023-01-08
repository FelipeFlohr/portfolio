import type ConsoleLogTitleLocalization from "../../screens/home/components/console_log_title/locale/ConsoleLogTitleLocalization";
import type HeaderLocalization from "../../screens/home/components/header/locale/HeaderLocalization";
import type NavigationLocalization from "../../screens/home/components/navigation/locale/NavigationLocalization";
import type NavbarLocalization from "../../shared/layout/components/navbar/locale/NavbarLocalization";
import type TopbarLocalization from "../../shared/layout/components/topbar/locale/TopbarLocalization";
import Localization from "../Localization";

export default class PortugueseBrazilianLocalization extends Localization {
    public override readonly navBarLocalization: NavbarLocalization = {
        aboutMeHref: "/pt/about",
        homeHref: "/pt",
        myExperienceHref: "/pt/experience",
        myProjectsHref: "/pt/projects",
        mySkillsHref: "/pt/skills",
        alsoAvailableInLanguages: "Também disponível em:",
        homeText: "Início",
        mySkillsText: "Minhas habilidades",
        myExperienceText: "Minha experiência",
        myProjectsText: "Meus projetos",
        aboutMeText: "Sobre mim"
    }
    
    public override readonly topBarLocalization: TopbarLocalization = {
        pathToShowUnix: "/home/felipe/Documents/programação/portifólio/",
        pathToShowWindows: "C:\\Users\\Felipe\\Documents\\programação\\portifólio\\"
    }
    
    public override readonly consoleLogTitleLocalization: ConsoleLogTitleLocalization = {
        consoleLogText: "Olá, mundo!",
        yesItsPrinting: "Sim, eu estou de fato printando."
    }
    
    public override readonly headerLocalization: HeaderLocalization = {
        welcomeToPortfolioOfText: "Bem-vindo ao portifólio de",
        nameText: "Felipe Matheus Flohr"
    }

    public override readonly navigationLocalization: NavigationLocalization = {
        feelFreeToExploreText: "Sinta-se livre para ver:"
    }
}