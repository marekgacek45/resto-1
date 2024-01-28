<!-- <template>
    <div class="flex justify-between items-center mb-4">
        <div>
            <h3 class="text-2xl uppercase">{{title}}</h3>
            <span class="text-sm font-thin"
                ><slot></slot></span
            >
        </div>
        <div><h4 class="text-2xl">{{ price }} zł</h4></div>
    </div>
</template> -->
<template>
    <div class="flex flex-col justify-start items-start mb-4">
        <div class="flex justify-between w-full">
            <h3 class="text-xl sm:text-2xl uppercase">{{ title }}</h3>
            
                <h4 class="text-xl sm:text-2xl">{{ price }}<span class="text-xs sm:text-base">zł</span></h4>
           
        </div>
        <div>
            <span class="text-xs sm:text-sm font-thin"><slot></slot></span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    price: String,
});
</script>
