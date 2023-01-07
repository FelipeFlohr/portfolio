import type NavbarLocalization from "../../shared/layout/components/navbar/locale/NavbarLocalization";
import type TopbarLocalization from "../../shared/layout/components/topbar/locale/TopbarLocalization";
import Localization from "../Localization";

export default class EnglishLocalization extends Localization {
    public override readonly navBarLocalization: NavbarLocalization = {
        aboutMeHref: "/en/about",
        homeHref: "/en",
        myExperienceHref: "/en/experience",
        myProjectsHref: "/en/projects",
        mySkillsHref: "/en/skills",
        alsoAvailableInLanguages: "Also available in:",
        homeText: "Home",
        mySkillsText: "My skills",
        myExperienceText: "My experience",
        myProjectsText: "My projects",
        aboutMeText: "About me"
    }

    public override readonly topBarLocalization: TopbarLocalization = {
        pathToShowUnix: "/home/felipe/Documents/programming stuff/portfolio/",
        pathToShowWindows: "C:\\Users\\Felipe\\Documents\\programming stuff\\portfolio\\"
    }
}