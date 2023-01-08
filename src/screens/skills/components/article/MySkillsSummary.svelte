<script lang="ts">
    import type Localization from "../../../../localization/Localization";
    import starSvg from "../../../../assets/icons/star.svg";

    export let localization: Localization;
</script>

<template>
    <header>
        <h1 class="mb-3">
            {localization.mySkillsLocalization.mySkillsTitleText}
        </h1>
    </header>
    <article>
        <p>
            {localization.mySkillsLocalization.technologiesSummaryText}
        </p>
        <ul class="list-disc ml-12 my-4">
            <li>
                <div class="flex flex-row">
                    <img class="h-6" src={starSvg} alt="A star icon" />
                    <img class="h-6" src={starSvg} alt="A star icon" />
                    <img class="h-6" src={starSvg} alt="A star icon" />
                    <span>{localization.mySkillsLocalization.threeStarsText}</span>
                </div>
            </li>
            <li>
                <div class="flex flex-row">
                    <img class="h-6" src={starSvg} alt="A star icon" />
                    <img class="h-6" src={starSvg} alt="A star icon" />
                    <span>{localization.mySkillsLocalization.twoStarsText}</span>
                </div>
            </li>
            <li>
                <div class="flex flex-row">
                    <img class="h-6" src={starSvg} alt="A star icon" />
                    <span>{localization.mySkillsLocalization.oneStarText}</span>
                </div>
            </li>
        </ul>
    </article>
</template>
