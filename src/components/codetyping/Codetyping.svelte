<script lang="ts">
    import WebsiteCodetyping from "./website/WebsiteCodetyping.svelte";
    import JsCodetyping from "./js/JsCodetyping.svelte";
    import JavaCodetyping from "./java/JavaCodetyping.svelte";

    let currentIndex = 0;
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

    .ubuntu {
        font-family: 'Ubuntu', sans-serif;
    }

    .w-2px {
        width: 2px;
    }

    .responsive-header {
        font-size: 3vw;
    }

    .responsive-min-height {
        min-height: 4.5vw;
        min-width: 1px;
    }

    .cursor-anim {
        animation-name: cursor-animation;
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

<div class="responsive-min-height flex flex-row m-0 pl-3">
    <div class="responsive-header flex ubuntu">
        {#if currentIndex == 0}
            <WebsiteCodetyping onFinish={() => currentIndex = 1}></WebsiteCodetyping>
        {:else if currentIndex == 1}
            <JsCodetyping onFinish={() => currentIndex = 2}></JsCodetyping>
        {:else}
            <JavaCodetyping onFinish={() => currentIndex = 0}></JavaCodetyping>
        {/if}
    </div>
    <span class="flex cursor-anim w-2px bg-white mx-1" />
</div>