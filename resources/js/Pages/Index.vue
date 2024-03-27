<template>
    <div>
        <Head title=" Jedyne Takie Miejsce">
            <meta
                name="description"
                content="Zapraszamy do Craft Kitchen, gdzie kulinarna kreatywność spotyka się z tradycyjnym rzemiosłem. Każde danie jest unikalne, a smakowe kompozycje zaskakują nawet najbardziej wyrafinowane podniebienia."
            />
        </Head>

        <Layout      :customClass="`lg:w-8/12 xl:w-9/12 bg-[url('/assets/images/home-small.webp')] sm:bg-[url('/assets/images/home-big.webp')] `">
            <template #navbar>
                <Navbar class="mt-12 sm:ml-12 mx-auto" />
            </template>

            <template #titleContent>
                <div
                    class="mb-16 sm:mb-7 sm:ml-14 text-center sm:text-start md:w-1/2"
                >
                    <TitleHeading :title="'Craft Kitchen'" custom-class="text-fontDark" />
                    <SocialBox></SocialBox>
                </div>
            </template>
            <template #mainContent>
                <div
                    class="flex flex-col md:flex-row lg:flex-col lg:w-4/12 xl:3/12 rounded-2xl"
                >
                    <HomeCard
                        :href="'/menu'"
                        :title="'Menu'"
                        :img="'/assets/images/home-1.webp'"
                    />
                    <HomeCard
                        :href="'/rezerwacja'"
                        :title="'Rezerwacja'"
                        :img="'/assets/images/home-2.webp'"
                    />
                    <HomeCard
                        :href="'/o-nas'"
                        :title="'Restauracja'"
                        :img="'/assets/images/home-3.webp'"
                    />
                </div>
            </template>
        </Layout>
    </div>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";
import HomeCard from "@/Components/HomeCard.vue";
import Navbar from "./Shared/Navigation/Navbar.vue";
import TitleHeading from "./Shared/TitleHeading.vue";
import SocialBox from "@/Components/SocialBox.vue";
</script>
