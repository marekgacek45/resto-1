<template>
    <div>

        <transition name="fade" mode="out-in" appear>
    <main
        class="relative flex flex-col lg:flex-row gap-4 lg:h-[96vh] min-w-full"
    >
        <div
            class="relative flex flex-col items-start justify-between  h-[96vh] lg:h-[full] rounded-2xl bg-cover bg-center bg-no-repeat"
            :class="customClass"
            
            
        >
            <slot name="navbar"></slot>

            <slot name="titleContent"></slot>
        </div>

        <slot name="mainContent"></slot>
    </main>
</transition>
    <Footer :customClass="'lg:hidden mt-4 py-4'"></Footer>
</div>
</template>

<script setup>
import Navbar from "./Navigation/Navbar.vue";
import SocialBox from "@/Components/SocialBox.vue";
import Footer from "./Footer.vue";

defineProps({
    title: String,
    titleClass: String,
    img: String,
    customClass: String,
    bgImage:String
});


</script>

<style>
 .fade-enter-active,
.fade-leave-active {
    transition:opacity 2s
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}
</style>
