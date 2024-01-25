<template>
    <div class="flex justify-between items-center my-1">
        <span class=" font-extralight">{{ day }}</span><span class="font-extralight">{{hours}}</span>
    </div>
</template>

<script setup>

defineProps({
    day:String,
    hours:String
})
</script>
