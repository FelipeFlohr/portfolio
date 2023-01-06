import type NavbarLocalization from "../shared/layout/components/navbar/locale/NavbarLocalization";
import type TopbarLocalization from "../shared/layout/components/topbar/locale/TopbarLocalization";

export default abstract class Localization {
    public abstract readonly topBarLocalization: TopbarLocalization
    public abstract readonly navBarLocalization: NavbarLocalization
}