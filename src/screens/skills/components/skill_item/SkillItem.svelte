<script lang="ts">
    import type { Technology } from "../../../../types/Technology";
    import starSvg from "../../../../assets/icons/star.svg"

    export let tech: Technology
</script>

<template>
    <div class={`flex flex-col justify-center items-center ${tech.isLarge ? "w-28" : "w-20"} h-24 rounded-md shadow-md transition-transform hover:scale-110 hover:cursor-default ${tech.whiteForeground ? "" : "black-border"}`} style={`background-color: ${tech.backgroundColor}; color: ${tech.whiteForeground ? "#FFF" : "#000"}`}>
        <div>
            <img class="max-w-12 h-8" src={tech.imagePath} alt={tech.alternativeAlt ? tech.alternativeAlt : `${tech.name} Logo`}>
        </div>
        <span class="text-center">{tech.name}</span>
        <div class="flex justify-center items-center">
            {#if tech.stars === 1}
                <img class={`w-4 h-4 first-star ${tech.whiteForeground ? "invert" : ""}`} src={starSvg} alt="One star">
            {:else if tech.stars === 2}
                <img class={`w-4 h-4 first-star ${tech.whiteForeground ? "invert" : ""}`} src={starSvg} alt="One star from a group of two">
                <img class={`w-4 h-4 second-star ${tech.whiteForeground ? "invert" : ""}`} src={starSvg} alt="One star from a group of two">
            {:else}
                <img class={`w-4 h-4 first-star ${tech.whiteForeground ? "invert" : ""}`} src={starSvg} alt="One star from a group of three">
                <img class={`w-4 h-4 second-star ${tech.whiteForeground ? "invert" : ""}`} src={starSvg} alt="One star from a group of three">
                <img class={`w-4 h-4 third-star ${tech.whiteForeground ? "invert" : ""}`} src={starSvg} alt="One star from a group of three">
            {/if}
        </div>
    </div>
</template>

<style scoped>
    .max-w-12 {
        max-width: 48px;
    }

    .first-star, .second-star, .third-star {
        transform: scale(0%);

        animation-name: star-appearance;
        animation-duration: 500ms;
        animation-fill-mode: forwards;
    }

    .second-star {
        animation-delay: 350ms;
    }

    .third-star {
        animation-delay: 650ms;
    }

    .black-border {
        border-width: 1px;
        border-color: #adadad;
    }

    @keyframes star-appearance {
        0% {
            transform: scale(0%);
        }

        80% {
            transform: scale(125%);
        }

        100% {
            transform: scale(100%);
        }
    }
</style>