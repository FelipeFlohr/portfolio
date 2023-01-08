<script lang="ts">
    import type Localization from "../../../../localization/Localization";
    import Navbar from "../navbar/Navbar.svelte";
    import Topbar from "../topbar/Topbar.svelte";

    export let pathToShow: string;
    export let localization: Localization;
    export let pageTitle: string;
</script>

<template>
    <div class="grid-content">
        <div class="topbar topbar-grid">
            <Topbar localization={localization} pathToShow={pathToShow} />
        </div>
        <div class="navbar overflow-x-hidden overflow-y-auto">
            <Navbar title={pageTitle} localization={localization} />
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .grid-content {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 240px 1fr;
        grid-template-rows: 56px 1fr;
        grid-template-areas: 
            "topbar topbar"
            "navbar content";
    }

    @media (max-width: 640px) {
        .grid-content {
            width: 100%;
            height: 100%;

            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 56px 1fr;
            grid-template-areas:
                "navbar"
                "content";
        }

        .topbar {
            display: none !important;
        }

        .topbar-grid {
            display: none !important;
        }
    }

    .topbar {
        grid-area: topbar;
    }

    .navbar {
        grid-area: navbar;
    }

    .content {
        grid-area: content;
    }

    .topbar-grid {
        display: flex;
        align-items: center;
        justify-content: left;
        background-color: rgb(15 23 42);
        overflow: hidden;
        white-space: nowrap;

        color: #FFFFFF;
        font-size: 24px;

        padding-left: 20px;
        padding-right: 8px;

        border-bottom-width: 4px;
        border-bottom-color: rgb(254, 243, 199);

        filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    }
</style>