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
}