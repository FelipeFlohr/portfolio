<script lang="ts">
    export let href: string;
</script>

<template>
    <a class="flex items-center justify-center w-0 h-9 whitespace-nowrap transition-all" href={href}>
        <slot />
    </a>
</template>

<style scoped>
    a:hover {
        background-color: #a89570;
        width: 100%;
    }
</style>