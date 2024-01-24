<template>
    <nav
        class="border border-black flex justify-center items-center rounded-xl py-2 px-2 sm:px-4 space-x-5 bg-bgDark text-fontLight text-sm uppercase "
    >
        <Hamburger @click="showModal = !showModal" />

        <teleport to="body">
            <HamburgerMenu :showModal="showModal" />
        </teleport>

        <NavLinks/>
    </nav>
</template>

<script setup>

import Hamburger from "./Hamburger.vue";
import { ref, onMounted, watch } from "vue";
import HamburgerMenu from "./HamburgerMenu.vue";
import NavLinks from './NavLinks.vue'

const showModal = ref(false);

const body = document.querySelector("body");

onMounted(() => {
    watch(showModal, (newValue) => {
        if (newValue) {
            body.classList.add("overflow-y-hidden");
        } else {
            body.classList.remove("overflow-y-hidden");
        }
    });
});
</script>

<style lang="scss" scoped>
.nav {
    &__link {
        @apply border border-transparent rounded-lg px-2 py-2 transition-all;
        &:hover {
            @apply border-primaryColor border-opacity-50;
        }
    }
}
</style>
