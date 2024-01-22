<template>
    <!-- <main class="flex flex-col lg:flex-row justify-between lg:h-[96vh] min-w-full gap-4"
     style=" height: calc(100vh - 32px);"
     > -->
    <main class="flex flex-col lg:flex-row justify-between lg:h-[96vh] min-w-full gap-4">
        <div
            class="lg:w-9/12 h-[96vh] lg:h-[full] flex flex-col items-start justify-between rounded-2xl relative"  :style="`background-image: url('${img}'); background-position: center; background-size: cover; background-repeat: no-repeat;`"
        >
            <Navbar class="mt-12 ml-12" />

            <div class="mb-7 ml-14">
                <!-- <h1 class="bottom-36 font-heading text-9xl text-black ">{{ title }}</h1> -->
                <h1 class="bottom-36 font-heading text-9xl text-black ">Modern <br>Bistro Loft</h1>
            </div>
            <SocialBox></SocialBox>
        </div>
        <div class=" lg:w-3/12  rounded-2xl flex flex-col md:flex-row  lg:flex-col">
            <slot></slot>
        </div>
    </main>
    <Footer></Footer>
</template>

<script setup>
import SocialIcon from "@/Components/SocialIcon.vue";
import Navbar from "./Navigation/Navbar.vue";
import SocialBox from "@/Components/SocialBox.vue";
import Footer from "./Footer.vue";

defineProps({
    title: String,
    img:String
});
</script>
