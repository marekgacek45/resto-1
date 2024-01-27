<template>
    <FrameBox :custom-class="'order-1 sm:order-none'">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.0104024368006!2d20.024426298394776!3d49.484114000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e4ed761fc9f5%3A0x3e96d70d21128c7c!2sMiejska%20Hala%20Lodowa%20w%20Nowym%20Targu!5e0!3m2!1spl!2spl!4v1706343960393!5m2!1spl!2spl"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full rounded-2xl min-h-[400px] sm:min-h-0"
        ></iframe>
    </FrameBox>
</template>

<script setup>
import FrameBox from "@/Components/FrameBox.vue";
</script>
