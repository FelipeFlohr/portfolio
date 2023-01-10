<script lang="ts">
    import type Localization from "../../../../localization/Localization";
    import starSvg from "../../../../assets/icons/star.svg";
    import SkillFrame from "../skill_frame/SkillFrame.svelte";
    import SkillItem from "../skill_item/SkillItem.svelte";
    import techStack from "../../data/technologies_knowledge";

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
        <hr class="border-gray-300">
        <section class="mt-8">
            <SkillFrame header={localization.mySkillsLocalization.languagesHeaderText}>
                {#each techStack.languages as language}
                    <SkillItem tech={language} />
                {/each}
            </SkillFrame>
            <div class="w-full h-14"></div>
            <SkillFrame header={localization.mySkillsLocalization.backendTechsHeaderText}>
                {#each techStack.backend as backEnd}
                    <SkillItem tech={backEnd} />
                {/each}
            </SkillFrame>
        </section>
    </article>
</template>
