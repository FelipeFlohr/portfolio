<script lang="ts">
    export let href: string

    function handleLiClick() {
        const anchor = document.createElement("a")
        anchor.href = href
        anchor.click()
    }
</script>

<template>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li on:click={handleLiClick} class="hover:bg-white hover:text-black px-6 py-3 transition-all hover:scale-110 border-2 border-white/20 rounded-md hover:cursor-pointer">
        <a href={href}>
            <slot />
        </a>
    </li>
</template>