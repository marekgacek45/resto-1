<template>
    <nav
        class="border border-black flex justify-center items-center rounded-xl py-2 px-2 sm:px-4 sm:space-x-5 bg-bgDark text-fontLight text-sm uppercase"
    >
        <Hamburger @click="showModal = !showModal"/>

        <teleport to="body">
            <transition>

                <div class="bg-bgDark fixed lg:absolute top-0 bottom-0 right-0 left-0 z-40 overflow-hidden" v-if="showModal">
                

                    <div
                    class="modal flex justify-center items-center flex-col gap-5"
                   >
                    
                    <Link href="/menu" class="link">Menu</Link>
                    <Link href="/reservation" class="link">Reservation</Link>
                    <Link href="/about" class="link">About</Link>
                    <Link href="/contact" class="link">Contact</Link>
                    
                    
                    
                </div>
            </div>
            
            </transition>
        </teleport>

        <Link href="/">
            <img
                src="/assets/logo.png"
                alt="restaurant logo"
                class="w-10 hidden sm:block"
            />
        </Link>
        <Link href="/menu" class="uppercase hidden sm:block nav__link">
            Menu
        </Link>
        <Link href="/o-nas" class="uppercase hidden sm:block nav__link">
            O nas
        </Link>
        <Link
            href="/rezerwacja"
            class="border border-primaryColor rounded-lg border-opacity-50 px-2 py-2 hidden sm:block hover:bg-primaryColor hover:bg-opacity-15 transition-colors"
        >
            Rezerwacja
        </Link>
    </nav>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Hamburger from "./Hamburger.vue";
import HamburgerMenu from "./HamburgerMenu.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>

<style lang="scss" scoped>
.nav {
    &__link {
        @apply border border-transparent rounded-lg px-2 py-2 transition-all;
        &:hover {
            @apply border-primaryColor border-opacity-50;
        }
    }
}

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

    
    @apply rounded-xl z-40  ;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.link{
    @apply text-fontLight font-heading text-6xl lg:text-7xl uppercase
}
</style>
