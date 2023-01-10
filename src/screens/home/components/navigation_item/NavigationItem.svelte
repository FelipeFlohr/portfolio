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
    <li on:click={handleLiClick} class="hover:bg-white hover:text-black hover:border-black hover:cursor-pointer hover:scale-110 shadow-2xl bg-gray-900 text-white px-6 py-3 transition-all border-2 border-black/20 rounded-md">
        <a href={href}>
            <slot />
        </a>
    </li>
</template>