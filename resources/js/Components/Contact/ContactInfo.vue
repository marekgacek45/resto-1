<template>
    <FrameBox :custom-class="'flex flex-col justify-between py-12 '">
        <div class="flex justify-center items-center gap-2">
            <span class="opacity-50">※</span>
            <h3 class="text-2xl uppercase">kontakt</h3>
            <span class="opacity-50">※</span>
        </div>
        <div>
            <div class="px-12">
                <div class="flex justify-between items-center my-8">
                    <span>Adres</span
                    ><span class="text-end font-extralight"
                        >Nowotarska 45<br />Nowy Targ</span
                    >
                </div>
                <div class="flex justify-between items-center my-8">
                    <span>Telefon</span
                    ><a href="tel:+48537392878" class="font-extralight"
                        >537 392 878</a
                    >
                </div>
                <div class="flex justify-between items-center my-8">
                    <span>Email</span
                    ><a
                        href="mailto:kontakt@marekgacek.pl"
                        class="font-extralight"
                        >kontakt@marekgacek.pl</a
                    >
                </div>

                <SocialAuthor />
            </div>
        </div>
    </FrameBox>
</template>

<script setup>
import FrameBox from "@/Components/FrameBox.vue";
import SocialAuthor from "../SocialAuthor.vue";
</script>
