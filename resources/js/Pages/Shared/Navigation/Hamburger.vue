<template>
    <div class="hamburger"  @click="toggle">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
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
    width: 20px;
    height: 2px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

/* Fade out the second bar */
.change .bar2 {
    opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}
</style>