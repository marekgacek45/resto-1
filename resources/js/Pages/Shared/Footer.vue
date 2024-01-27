<template>
    <footer
        class="flex flex-col sm:flex-row justify-center items-center sm:gap-6   border border-primaryColor border-opacity-20 rounded-2xl text-fontLight" :class="customClass"
    >
        <Link href="/licencje" class="opacity-60 hover:opacity-100 transition-opacity">Licencje</Link>
        <span >※</span>
        <a href="https://marekgacek.pl" target="_blank" class="opacity-60 hover:opacity-100 transition-opacity">©{{year}} Marek Gacek</a>
        <span >※</span>
        <Link href="/polityka_prywatnosci" class="opacity-60 hover:opacity-100 transition-opacity">Polityka Prywatności</Link>
    </footer>
</template>


<script setup>

defineProps({
    customClass:String
})


const today = new Date()
const year = today.getFullYear();

</script>