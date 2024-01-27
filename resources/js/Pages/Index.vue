<template>
    <div>
        <Head title=" Kulinarna Rozkosz">
            <meta
                name="description"
                content="Zapraszamy do Craft Kitchen, gdzie kulinarna kreatywność spotyka się z tradycyjnym rzemiosłem. Każde danie jest unikalne, a smakowe kompozycje zaskakują nawet najbardziej wyrafinowane podniebienia."
            />
        </Head>

        <Layout  :img="'assets/images/dish.jpg'">
            <template #navbar>
                <Navbar class="mt-12 sm:ml-12 mx-auto" />
            </template>

            <template #titleContent>
                <div
                    class="mb-16 sm:mb-7 sm:ml-14 text-center sm:text-start md:w-1/2"
                >
                    <TitleHeading :title="'Craft Kitchen'" />
                    <SocialBox></SocialBox>
                </div>
            </template>
            <template #mainContent>
                <div
                    class="flex flex-col md:flex-row lg:flex-col lg:w-3/12 rounded-2xl"
                >
                    <HomeCard
                        :href="'/menu'"
                        :title="'Menu'"
                        :img="'assets/images/main-small.jpg'"
                    />
                    <HomeCard
                        :href="'/rezerwacja'"
                        :title="'Rezerwacja'"
                        :img="'assets/images/reservation.jpg'"
                    />
                    <HomeCard
                        :href="'/o-nas'"
                        :title="'Restauracja'"
                        :img="'assets/images/restaurant.jpg'"
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
