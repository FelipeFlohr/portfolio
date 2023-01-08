<script lang="ts">
    import type Localization from "../../../../localization/Localization";
    import NavigationItem from "../navigation_item/NavigationItem.svelte";

    export let localization: Localization;
</script>

<template>
    <div class="mt-10 flex flex-col justify-center items-center">
        <h3 class="mb-6">{localization.navigationLocalization.feelFreeToExploreText}</h3>
        <ul class="invisible flex flex-row flex-wrap gap-x-4 gap-y-2 justify-center items-center">
            <NavigationItem href={localization.navBarLocalization.homeHref}>{localization.navBarLocalization.homeText}</NavigationItem>
            <NavigationItem href={localization.navBarLocalization.mySkillsHref}>{localization.navBarLocalization.mySkillsText}</NavigationItem>
            <NavigationItem href={localization.navBarLocalization.myExperienceHref}>{localization.navBarLocalization.myExperienceText}</NavigationItem>
            <NavigationItem href={localization.navBarLocalization.myProjectsHref}>{localization.navBarLocalization.myProjectsText}</NavigationItem>
            <NavigationItem href={localization.navBarLocalization.aboutMeHref}>{localization.navBarLocalization.aboutMeText}</NavigationItem>
        </ul>
    </div>
</template>

<style scoped>
    h3 {
        font-size: calc(0.8rem + 1.5vw);
        font-weight: 300;
        line-height: 1.2;
        animation-name: fade-h3;
        animation-duration: 1000ms;
    }

    ul {
        animation-name: fade-ul;
        animation-delay: 1000ms;
        animation-duration: 1000ms;
        animation-fill-mode: forwards;
    }

    @keyframes fade-h3 {
        0% {
            opacity: 0%;
        }

        100% {
            opacity: 100%;
        }
    }

    @keyframes fade-ul {
        0% {
            visibility: hidden;
            opacity: 0%;
        }

        100% {
            visibility: visible;
            opacity: 100%;
        }
    }
</style>