<template>
    <Link href="/">
        <img src="/assets/logo.png" alt="restaurant logo" class="w-10"
    /></Link>

    <Link href="/menu" class="uppercase hidden sm:block nav__link"> Menu </Link>
    <Link href="/o_nas" class="uppercase hidden sm:block nav__link">
        O nas
    </Link>
    <Link
        href="/rezerwacja" class="border border-primaryColor rounded-lg border-opacity-50 px-2 py-2 hover:bg-primaryColor hover:bg-opacity-15 transition-colors">Rezerwacja
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
</script>
