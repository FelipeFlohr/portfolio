<script lang="ts">
    import type Localization from "../../../../localization/Localization";

    export let localization: Localization
</script>

<template>
    <h1 class="text-5xl">
        {localization.headerLocalization.welcomeToPortfolioOfText}
    </h1>
    <h2 class="text-3xl mt-2">{localization.headerLocalization.nameText}</h2>
</template>

<style scoped>
    h1 {
        font-size: calc(1.475rem + 2.7vw);
        line-height: 1.2;
    }

    @media (max-width: 822px) and (min-width: 640px) {
        h1 {
            font-size: calc(1.200rem + 2.1vw);
        }

        h2 {
            font-size: calc(1.375rem + 1.5vw);
            font-weight: 300;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: calc(1.425rem + 1.7vw);
            line-height: 1.2;
        }

        h2 {
            font-size: calc(1.375rem + 1.3vw);
            line-height: 1.2;
        }
    }
</style>