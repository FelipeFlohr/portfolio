<script lang="ts">
    export let header: string
</script>

<template>
    <div class="bg-gray-50 w-full grid shadow-2xl border-2 border-gray-100 rounded-xl">
        <header class="flex justify-center items-center text-center mt-2">
            <h4>{header}</h4>
        </header>
        <div class="flex flex-wrap gap-x-2 gap-y-1 justify-center items-center my-6">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .grid {
        grid-template-rows: 32px 1fr;
    }
</style>