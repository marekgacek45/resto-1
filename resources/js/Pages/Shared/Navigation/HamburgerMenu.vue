<template>
    <transition>
      <div v-if="showModal" class="bg-bgDark fixed lg:absolute top-0 bottom-0 right-0 left-0 z-40 overflow-hidden">
        <div class="modal flex justify-center items-center flex-col gap-5">
          <span class="text-4xl text-fontLight opacity-60">※</span>
          <Link href="/menu" class="link">Menu</Link>
          <Link href="/reservation" class="link">Reservation</Link>
          <Link href="/about" class="link">About</Link>
          <Link href="/contact" class="link">Contact</Link>
          <span class="text-4xl text-fontLight opacity-60">※</span>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { Link } from "@inertiajs/vue3";

  defineProps({
    showModal:Boolean
  })
  
  
  </script>
  
  <style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 16px;
    bottom: 16px;
    right: 16px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111111;
  
    @apply rounded-xl z-40;
  }
  
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  
  .link {
    @apply text-fontLight font-heading text-6xl lg:text-7xl uppercase opacity-70 hover:opacity-100 transition-opacity;
  }
  </style>