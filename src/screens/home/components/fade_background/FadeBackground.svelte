<template>
    <div class="bg w-full h-full text-black">
        <slot />
    </div>
</template>

<style scoped>
    .bg {
        background: radial-gradient(circle, rgb(255, 255, 255) 0%, rgb(221, 205, 205) 100%);
        animation-name: fade-bg;
        animation-duration: 6000ms;
        animation-timing-function: cubic-bezier();
    }

    @keyframes fade-bg {
        0% {
            background-size: 1000%;
            background-position: 0 50%;
        }

        100% {
            background-size: 100%;
            background-position: 50% 0;
        }
    }
</style>