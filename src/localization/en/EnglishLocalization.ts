import type ConsoleLogTitleLocalization from "../../screens/home/components/console_log_title/locale/ConsoleLogTitleLocalization";
import type HeaderLocalization from "../../screens/home/components/header/locale/HeaderLocalization";
import type NavigationLocalization from "../../screens/home/components/navigation/locale/NavigationLocalization";
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
    
    public override readonly consoleLogTitleLocalization: ConsoleLogTitleLocalization = {
        consoleLogText: "Hello, world!",
        yesItsPrinting: "Yes, I am indeed printing to the console."
    }
    
    public override readonly headerLocalization: HeaderLocalization = {
        welcomeToPortfolioOfText: "Welcome to",
        nameText: "Felipe's Portfolio"
    }

    public override readonly navigationLocalization: NavigationLocalization = {
        feelFreeToExploreText: "Feel free to explore:"
    }
}