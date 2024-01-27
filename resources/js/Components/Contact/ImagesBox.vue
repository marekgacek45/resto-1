<template>
    <FrameBox
        :custom-class="'grid grid-cols-2 grid-rows-2 w-full h-full gap-2 p-2 min-h-[450px] sm:min-h-0'"
    >
       <image-item :src="'/assets/images/contact-1.webp'" :alt="'przystawka kalmary'"/>
       <image-item :src="'/assets/images/contact-2.webp'" :alt="'przystawka kalmary'"/>
       <image-item :src="'/assets/images/contact-3.webp'" :alt="'przystawka kalmary'"/>
       <image-item :src="'/assets/images/contact-4.webp'" :alt="'przystawka kalmary'"/>
       
        
        
    </FrameBox>
</template>


<script setup>

import FrameBox from "@/Components/FrameBox.vue";
import ImageItem from "@/Components/Contact/ImageItem.vue";


</script>