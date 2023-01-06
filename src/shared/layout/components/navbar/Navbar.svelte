<script lang="ts">
    import type Localization from "../../../../localization/Localization";
    import NavbarLink from "../navbar_link/NavbarLink.svelte";

    export let localization: Localization;
    export let title: string;

    const finalTitle = `Felipe's Portfolio - ${title}aaaaaaaaaaaaaaaaaa`
    let showModal: boolean = false
</script>

<template>
    <div class="desktop w-full h-full bg-slate-900 text-white border-r-4 border-r-amber-100">
        <header class="w-full h-72 flex flex-col items-center pt-11 text-xl">
            <h1>Felipe Matheus Flohr</h1>
            <img class="rounded-full border-amber-100 border-4 mt-7 w-5/6" src="/felipe-384.jpg" alt="Felipe Matheus Flohr">
        </header>
        <hr class="mt-10 mx-5">
        <nav class="flex flex-col items-center gap-2 mt-6 mx-5">
            <NavbarLink href={localization.navBarLocalization.homeHref}>Home</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.mySkillsHref}>My Skills</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.myExperienceHref}>My Experience</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.myProjectsHref}>My Projects</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.aboutMeHref}>About me</NavbarLink>
        </nav>
    </div>
    <div class="mobile w-full h-14 bg-slate-900 border-b-4 border-b-amber-100 text-white">
        <header class="flex ml-3 items-center overflow-hidden text-ellipsis">
            <h1 class="whitespace-nowrap">{finalTitle}</h1>
        </header>
        <div>
            botao
        </div>
    </div>
</template>

<style scoped>
    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }

    @media (max-width: 640px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: grid;
            grid-template-columns: 1fr 60px;
            grid-template-rows: 1fr;
        }
    }
</style>