<script lang="ts">
    export let href: string;
</script>

<template>
    <a class="flex items-center justify-center w-0 h-9 whitespace-nowrap text-2xl my-8 transition-transform hover:scale-125" href={href}>
        <b><slot /></b>
    </a>
</template>