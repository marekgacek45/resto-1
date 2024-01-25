<template>
    <div
        class="border border-primaryColor border-opacity-20 hover:border-opacity-50 rounded-2xl text-fontLight" :class="customClass">
        <slot></slot>
    </div>
</template>

<script setup>

defineProps({
    customClass:String
})

</script>