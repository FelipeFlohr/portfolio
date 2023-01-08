import type Localization from "../localization/Localization";

export default interface DefaultProps {
    readonly title: string;
    readonly pathToShow: string;
    readonly localization: Localization;
}