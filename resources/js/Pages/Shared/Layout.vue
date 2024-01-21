<template>
    <main class="flex justify-between min-h-screen min-w-full">
        <div class="bg-pink-500 w-1/2">
            <Navbar />
            <h1>nazwa strony</h1>
        </div>
        <div class="bg-red-500 w-1/2">
            <slot></slot>
        </div>
    </main>
</template>

<script setup>
import Navbar from "./Navigation/Navbar.vue";
</script>
