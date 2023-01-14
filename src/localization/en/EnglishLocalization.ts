import type ConsoleLogTitleLocalization from "../../screens/home/components/console_log_title/locale/ConsoleLogTitleLocalization";
import type HeaderLocalization from "../../screens/home/components/header/locale/HeaderLocalization";
import type NavigationLocalization from "../../screens/home/components/navigation/locale/NavigationLocalization";
import type MySkillsLocalization from "../../screens/skills/locale/MySkillsLocalization";
import type NavbarLocalization from "../../shared/home_layout/components/navbar/locale/NavbarLocalization";
import type TopbarLocalization from "../../shared/home_layout/components/topbar/locale/TopbarLocalization";
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
        aboutMeText: "About me",
        namePortfolioText: "Felipe Matheus Flohr's",
        portfolioText: "Portfolio",
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

    public override readonly mySkillsLocalization: MySkillsLocalization = {
        mySkillsTitleText: "My skills",
        technologiesSummaryText: `Below, you can check the
tools/programming languages/technologies in which I have some
kind of knowledge. Next to them, you will find a personal rating
indicating how familiar I am with the technology. The rating
works like this:`,
        threeStarsText: "(Three stars): real life professional experience.",
        twoStarsText: "(Two stars): solid knowledge but missing professional experience.",
        oneStarText: "(One star): knowledge of the main concepts.",
        backendTechsHeaderText: "Back-end technologies:",
        frontendTechsHeaderText: "Front-end technologies:",
        miscKnowledgeHeaderText: "Misc. knowledges:",
        mobileTechsHeaderText: "Mobile technologies:",
        languagesHeaderText: "Languages:"
    }
}