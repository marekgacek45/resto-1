<template>
    <nav
        class="border border-black flex justify-center items-center rounded-xl py-2 px-2 sm:px-4 sm:space-x-5 bg-bgDark text-fontLight text-sm uppercase"
    >
        <Hamburger />

        <Link href="/"
            ><img
                src="/assets/logo.png"
                alt="restaurant logo"
                class="w-10 hidden sm:block"
        /></Link>
        <Link
            href="/menu"
            class="uppercase hidden sm:block nav__link"
            >Menu</Link
        >
        <Link href="/o-nas" class="uppercase hidden sm:block nav__link"
            >O nas</Link
        >
        <Link
            href="/rezerwacja"
            class="border border-primaryColor rounded-lg border-opacity-50 px-2 py-2 hidden sm:block hover:bg-primaryColor hover:bg-opacity-15 transition-colors"
            >Rezerwacja</Link
        >
    </nav>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Hamburger from "./Hamburger.vue";
import HamburgerMenu from "./HamburgerMenu.vue";
</script>

<style lang="scss" scoped>
.nav {
    &__link {
        @apply border border-transparent rounded-lg  px-2 py-2 transition-all;
        &:hover{
            @apply border-primaryColor border-opacity-50
        }
       
    }
}
</style>
