<template>
    <div
        class="border border-primaryColor border-opacity-20 hover:border-opacity-50 rounded-2xl text-fontLight duration-300 max-h-[400px] lg:max-h-max" :class="customClass">
        <slot></slot>
    </div>
</template>

<script setup>

defineProps({
    customClass:String
})

</script>