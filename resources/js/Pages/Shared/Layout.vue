<template>
    <main
        class="relative flex flex-col lg:flex-row  gap-4 lg:h-[96vh] min-w-full"
    >
        <div
            class="relative flex flex-col items-start justify-between lg:w-9/12 h-[96vh] lg:h-[full] rounded-2xl bg-cover bg-center bg-no-repeat" 
            :class='width' :style="`background-image: url('${img}');`"
        >
       
       
            <Navbar class="mt-12 sm:ml-12 mx-auto" />

            <div
                class="mb-16 sm:mb-7 sm:ml-14 text-center sm:text-start md:w-1/2"
            >
                
                <h1
                    class="bottom-36 font-heading font-semibold sm:font-medium text-7xl sm:text-8xl lg:text-9xl text-black uppercase"
                >
                    {{title}}
                </h1>
            </div>
            <SocialBox></SocialBox>
        </div>
        
            <slot></slot>
        
    </main>
    <Footer :customClass="'lg:hidden mt-4 py-4'"></Footer>
</template>

<script setup>
import Navbar from "./Navigation/Navbar.vue";
import SocialBox from "@/Components/SocialBox.vue";
import Footer from "./Footer.vue";

defineProps({
    title: String,
    img: String,
    width:String
});
</script>
