<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const isBrazil = isBrazilianLocation();
        if (isBrazil) {
            const url = `${window.location.origin}/pt/`;
            (window.location as unknown) = url;
        }
    })

    function isBrazilianLocation(): boolean {
        const brazilianLocations = [
            "America/Araguaina",
            "America/Bahia",
            "America/Belem",
            "America/Boa_Vista",
            "America/Campo_Grande",
            "America/Cuiaba",
            "America/Eirunepe",
            "America/Fortaleza",
            "America/Maceio",
            "America/Manaus",
            "America/Noronha",
            "America/Porto_Velho",
            "America/Recife",
            "America/Rio_Branco",
            "America/Santarem",
            "America/Sao_Paulo",
        ]
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        return brazilianLocations.includes(timezone)
    }
</script>

<template>
    <slot />
</template>