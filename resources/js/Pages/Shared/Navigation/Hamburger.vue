<template>
    <div
        class="hamburger border border-primaryColor border-opacity-50 rounded-lg px-2 py-1 group hover:bg-primaryColor hover:bg-opacity-15 transition-colors"
        @click="toggle"
    >
        <div class="bar1 group-hover:translate-y-1"></div>
        <div class="bar2"></div>
        <div class="bar3 group-hover:-translate-y-1"></div>
    </div>
</template>

<script>
export default {
    methods: {
        toggle() {
            this.$el.classList.toggle("change");
        },
    },
};
</script>

<style scoped>
.hamburger {
    display: inline-block;
    cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
    @apply bg-primaryColor w-5 duration-300;
    height: 1px;
    margin: 5px 0;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}
.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}
</style>
