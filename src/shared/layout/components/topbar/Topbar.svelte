<script lang="ts">
    import { onMount } from "svelte";

    export let pathToShow: string;

    const fullPath = `C:\\Users\\Felipe\\Documents\\programming stuff\\portfolio\\${pathToShow}`
    let currentPath = ""

    onMount(() => {
        const thisInterval = setInterval(() => {
            if(currentPath === fullPath) {
                clearInterval(thisInterval)
            } else {
                const charToAdd = fullPath.charAt(currentPath.length)
                const stringToSet = currentPath + charToAdd
                currentPath = stringToSet
            }
        }, 50)
    })
</script>

<template>
    <span class="overflow-hidden mr-2 text-ellipsis float-left path-font">{currentPath}</span>
    <span class="h-6 bg-white m-1 w-14px cursor-anim" />
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

    .path-font {
        font-family: "VT323", monospace;
    }

    .cursor-anim {
        animation-name: cursor-animation;
        animation-duration: 1s;
        animation-timing-function: steps(2);
        animation-iteration-count: infinite;
    }

    .w-14px {
        width: 14px;
    }

    @keyframes cursor-animation {
        0% {
            visibility: hidden;
        }

        100% {
            visibility: visible;
        }
    }
</style>