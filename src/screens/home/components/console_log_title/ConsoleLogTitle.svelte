<script lang="ts">
    import { onMount } from "svelte";
    import type Localization from "../../../../localization/Localization";
    import sleep from "../../../../utils/sleep";

    export let localization: Localization;

    const consoleFinalString = "console."
    const logFinalString = "log"
    const firstParenthesisFinalString = "("
    const helloWorldFinalString = `"${localization.consoleLogTitleLocalization.consoleLogText}"`
    const lastParenthesisFinalString = ")"

    let consoleString = ""
    let logString = ""
    let firstParenthesisString = ""
    let helloWorldString = ""
    let lastParenthesisString = ""

    onMount(async () => {
        console.log(`${localization.consoleLogTitleLocalization.consoleLogText} ${localization.consoleLogTitleLocalization.yesItsPrinting}`)

        for (const char of consoleFinalString.split("")) {
            consoleString = consoleString + char
            await sleep(100)
        }

        for (const char of logFinalString.split("")) {
            logString = logString + char
            await sleep(70)
        }

        for (const char of firstParenthesisFinalString.split("")) {
            firstParenthesisString = firstParenthesisString + char
            await sleep(110)
        }

        for (const char of helloWorldFinalString.split("")) {
            helloWorldString = helloWorldString + char
            await sleep(65)
        }

        for (const char of lastParenthesisFinalString.split("")) {
            lastParenthesisString = lastParenthesisString + char
            await sleep(115)
        }
    })
</script>

<template>
    <i>
        <span class="text-sm flex flex-nowrap">
            <span class="mr-2">>></span>
            <span class="console">{consoleString}</span>
            <span class="log">{logString}</span>
            <span class="parenthesis">{firstParenthesisString}</span>
            <span class="string">{helloWorldString}</span>
            <span class="parenthesis">{lastParenthesisString}</span>
            <div class="cursor w-2 h-4 ml-2" />
        </span>
    </i>
</template>

<style>
    .console {
        color: #9ddcff;
    }

    .log {
        color: #dddcab;
    }

    .parenthesis {
        color: #ffd601;
    }

    .string {
        color: #ce9079;
    }

    .cursor {
        background-color: #FFF;
        margin-top: 3px;

        animation: cursor-animation;
        animation-duration: 1s;
        animation-timing-function: steps(2);
        animation-iteration-count: infinite;
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