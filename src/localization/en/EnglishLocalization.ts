import type TopbarLocalization from "../../shared/layout/components/topbar/locale/TopbarLocalization";
import Localization from "../Localization";

export default class EnglishLocalization extends Localization {
    public override topBarLocalization: TopbarLocalization = {
        pathToShowUnix: "/home/felipe/Documents/programming stuff/portfolio/",
        pathToShowWindows: "C:\\Users\\Felipe\\Documents\\programming stuff\\portfolio\\"
    }
}