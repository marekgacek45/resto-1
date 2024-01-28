<template>
   
    <h1
    class="bottom-36 font-heading font-medium text-7xl sm:text-8xl lg:text-9xl  uppercase " :class="customClass"
    style="text-shadow: 2px 2px 3px black;"
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