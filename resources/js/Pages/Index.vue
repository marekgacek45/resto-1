<template>
    <Head title=" Kulinarna Rozkosz">
        <meta
            name="description"
            content="Zapraszamy do Craft Kitchen, gdzie kulinarna kreatywność spotyka się z tradycyjnym rzemiosłem. Każde danie jest unikalne, a smakowe kompozycje zaskakują nawet najbardziej wyrafinowane podniebienia."
        />
    </Head>

    <Layout :title="'Craft Kitchen'" :img="'assets/images/dish.jpg'">
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
    </Layout>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";
import HomeCard from "@/Components/HomeCard.vue";
</script>
