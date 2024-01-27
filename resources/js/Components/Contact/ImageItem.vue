<template>
     <div class="relative w-full h-full overflow-hidden rounded-xl">
            <img
                :src="src"
                class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out"
                :alt="alt"
            />
        </div>
</template>

<script setup>

defineProps({
    src:String,
    alt:String
})

</script>