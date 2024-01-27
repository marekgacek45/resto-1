<template>
   
    <h1
    class="bottom-36 font-heading font-semibold sm:font-medium text-7xl sm:text-8xl lg:text-9xl text-black uppercase" :class="customClass"
    >
{{title}}
</h1>
</template>


<script setup>

defineProps({
    title:String,
    customClass:String
})

</script>