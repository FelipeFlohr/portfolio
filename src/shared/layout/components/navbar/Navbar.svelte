<script lang="ts">
    import { onMount } from "svelte";
    import MenuIcon from "../../../../assets/icons/MenuIcon.svelte";
    import type Localization from "../../../../localization/Localization";
    import NavbarLink from "../navbar_link/NavbarLink.svelte";
    import NavbarLinkMobile from "../navbar_link_mobile/NavbarLinkMobile.svelte";

    export let localization: Localization;
    export let title: string;

    const finalTitle = `Felipe's Portfolio - ${title}`
    let showModal: boolean = false
    let englishUrl = ""
    let ptBrUrl = ""

    onMount(() => {
        englishUrl = window.location.href.replace("/pt", "/en")
        ptBrUrl = window.location.href.replace("/en", "/pt")
    })

    function handleModal() {
        showModal = !showModal
    }
</script>

<template>
    <!-- Desktop's Navbar -->
    <div class="desktop flex-col w-full h-screen bg-slate-900 text-white border-r-4 border-r-amber-100 max-h-screen">
        <header class="w-full h-72 flex flex-col items-center pt-11 text-xl">
            <h1>Felipe Matheus Flohr</h1>
            <img class="rounded-full border-amber-100 border-4 mt-7 w-5/6" src="/felipe-384.jpg" alt="Felipe Matheus Flohr">
        </header>
        <hr class="mt-10 mx-5">
        <nav class="flex flex-col items-center gap-2 mt-6 mx-5">
            <NavbarLink href={localization.navBarLocalization.homeHref}>{localization.navBarLocalization.homeText}</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.mySkillsHref}>{localization.navBarLocalization.mySkillsText}</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.myExperienceHref}>{localization.navBarLocalization.myExperienceText}</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.myProjectsHref}>{localization.navBarLocalization.myProjectsText}</NavbarLink>
            <NavbarLink href={localization.navBarLocalization.aboutMeHref}>{localization.navBarLocalization.aboutMeText}</NavbarLink>
        </nav>
        <div class="w-full h-full flex flex-col justify-end items-center text-gray-400 mb-6">
            <span>{localization.navBarLocalization.alsoAvailableInLanguages}</span>
            <span>
                <a class="text-white" href={englishUrl}>English</a> | <a href={ptBrUrl} class="text-white">Português Brasileiro</a>
            </span>
        </div>
    </div>
    <!-- Mobile's Navbar -->
    <div class="mobile w-full h-14 bg-slate-900 border-b-4 border-b-amber-100 text-white overflow-hidden drop-shadow-md">
        <div class="inner-content flex w-full mobile">
            <header class="flex ml-3 items-center overflow-hidden text-ellipsis whitespace-nowrap">
                <h1 class="overflow-hidden mr-2 text-ellipsis float-left path-font">{finalTitle}</h1>
            </header>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={handleModal} class="flex items-center justify-center px-2 hover:cursor-pointer">
                <MenuIcon />
            </div>
        </div>
    </div>
    { #if showModal }
        <!-- Mobile's Modal -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={handleModal} class="absolute z-10 flex flex-col items-center justify-center top-0 w-full h-full bg-black/95 transition-all text-white">
            <div>
                <NavbarLinkMobile href={localization.navBarLocalization.homeHref}>{localization.navBarLocalization.homeText}</NavbarLinkMobile>
                <NavbarLinkMobile href={localization.navBarLocalization.mySkillsHref}>{localization.navBarLocalization.mySkillsText}</NavbarLinkMobile>
                <NavbarLinkMobile href={localization.navBarLocalization.myExperienceHref}>{localization.navBarLocalization.myExperienceText}</NavbarLinkMobile>
                <NavbarLinkMobile href={localization.navBarLocalization.myProjectsHref}>{localization.navBarLocalization.myProjectsText}</NavbarLinkMobile>
                <NavbarLinkMobile href={localization.navBarLocalization.aboutMeHref}>{localization.navBarLocalization.aboutMeText}</NavbarLinkMobile>
            </div>
            <div class="flex flex-col justify-center items-center text-gray-400">
                {localization.navBarLocalization.alsoAvailableInLanguages}
                <br>
                <span>
                    <a class="text-gray-200" href={englishUrl}>English</a> | <a class="text-gray-200" href={ptBrUrl}>Português Brasileiro</a>
                </span>
            </div>
        </div>
    {/if}
</template>

<style scoped>
    .inner-content {
        height: 54px;
    }

    .desktop {
        display: flex;
        height: calc(100vh - 56px);
    }

    .mobile {
        display: none;
    }

    @media (max-width: 640px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .mobile.inner-content {
            display: grid;
            grid-template-columns: 1fr 60px;
            grid-template-rows: 1fr;
        }
    }
</style>