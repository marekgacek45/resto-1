<template>
    <FrameBox
        :custom-class="'grid grid-cols-2 grid-rows-2 w-full h-full gap-2 p-2 min-h-[450px] sm:min-h-0'"
    >
       <image-item :src="'/assets/images/menu-small.webp'" :alt="'danie z naszej restauracji'"/>
       <image-item :src="'/assets/images/reservation-small.webp'" :alt="'wnętrze restauracji'"/>
       <image-item :src="'/assets/images/about-small.webp'" :alt="'wnętrze restauracji'"/>
       <image-item :src="'/assets/images/home-small.webp'" :alt="'danie z naszej restauracji'"/>
       
        
        
    </FrameBox>
</template>


<script setup>

import FrameBox from "@/Components/FrameBox.vue";
import ImageItem from "@/Components/Contact/ImageItem.vue";


</script>