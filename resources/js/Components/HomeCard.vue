<template>
    <!-- <div 
    
    > -->
    <Link
        :href="href"
        as="div"
        class="group w-full md:w-1/3 lg:w-auto h-[350px] md:h-56 lg:h-1/3 m-2 relative rounded-lg opacity-70 hover:opacity-100 duration-300 z-10 cursor-pointer"
        :style="`background-image: url('${img}'); background-position: center; background-size: cover; background-repeat: no-repeat;`"
    >
        <div
            class="bg-black absolute bottom-0 right-0 px-4 py-2 flex items-center justify-center gap-3 rounded-tl-2xl opacity-100 z-40"
        >
            <h6 class="text-fontLight uppercase font-heading tracking-widest">
                {{ title }}
            </h6>
            <div
                class="border border-fontLight rounded-full p-1 overflow-hidden flex relative"
            >
                <svg
                    fill="#efe7d2"
                    width="13"
                    height="13"
                    version="1.1"
                    id="lni_lni-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 64 64"
                    style="enable-background: new 0 0 64 64"
                    xml:space="preserve"
                    class="group-hover:translate-x-10 duration-300"
                >
                    <path
                        d="M57.6,30.4l-20.7-21c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l16.8,17.1H8c-1.2,0-2.2,1-2.2,2.2s1,2.3,2.2,2.3h42.7
                    l-17,17.3c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.7l20.7-21C58.5,32.7,58.5,31.3,57.6,30.4z"
                    />
                </svg>
                <svg
                    fill="#efe7d2"
                    width="13"
                    height="13"
                    version="1.1"
                    id="lni_lni-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 64 64"
                    style="enable-background: new 0 0 64 64"
                    xml:space="preserve"
                    class="absolute -translate-x-7 group-hover:translate-x-0 duration-300"
                >
                    <path
                        d="M57.6,30.4l-20.7-21c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l16.8,17.1H8c-1.2,0-2.2,1-2.2,2.2s1,2.3,2.2,2.3h42.7
                    l-17,17.3c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.7l20.7-21C58.5,32.7,58.5,31.3,57.6,30.4z"
                    />
                </svg>
            </div>
        </div>
    </Link>
    <!-- </div> -->
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    title: String,
    img: String,
    href: String,
});
</script>
