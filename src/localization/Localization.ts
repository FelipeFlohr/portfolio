import type ConsoleLogTitleLocalization from "../screens/home/components/console_log_title/locale/ConsoleLogTitleLocalization";
import type HeaderLocalization from "../screens/home/components/header/locale/HeaderLocalization";
import type NavigationLocalization from "../screens/home/components/navigation/locale/NavigationLocalization";
import type MySkillsLocalization from "../screens/skills/locale/MySkillsLocalization";
import type NavbarLocalization from "../shared/layout/components/navbar/locale/NavbarLocalization";
import type TopbarLocalization from "../shared/layout/components/topbar/locale/TopbarLocalization";

export default abstract class Localization {
    public abstract readonly topBarLocalization: TopbarLocalization
    public abstract readonly navBarLocalization: NavbarLocalization
    public abstract readonly consoleLogTitleLocalization: ConsoleLogTitleLocalization
    public abstract readonly headerLocalization: HeaderLocalization;
    public abstract readonly navigationLocalization: NavigationLocalization;
    public abstract readonly mySkillsLocalization: MySkillsLocalization;
}