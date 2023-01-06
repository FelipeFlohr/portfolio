<script lang="ts">
    import type Localization from "../../../../localization/Localization";
    import NavbarLink from "../navbar_link/NavbarLink.svelte";

    export let localization: Localization;
</script>

<template>
    <div class="w-full h-full bg-slate-900 text-white border-r-4 border-r-amber-100">
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
</template>