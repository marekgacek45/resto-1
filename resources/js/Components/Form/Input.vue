<template>
    <input
    :value="modelValue" @input="updateValue" class="text-black w-full border-2 border-primaryColor rounded-xl focus:border-secondaryColor"
        
    />
    
</template>

<script setup>
const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>
