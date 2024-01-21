<template>
    <nav class="border border-black flex justify-center items-center rounded-lg p-2 space-x-4 ">
        

  <Hamburger/>

        
        <Link href="/">home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/o-nas">O nas</Link>
        <Link href="/rezerwacja">Zarezerwuj Stolik</Link>
    </nav>
</template>

<script setup>

import {Link} from '@inertiajs/vue3'
import Hamburger from './Hamburger.vue';
import HamburgerMenu from './HamburgerMenu.vue';
</script>