<template>
    <Layout :title="''" :img="'assets/images/dish.jpg'">
    
<HomeCard :href="'/menu'" :title="'Menu'" :img="'assets/images/main-small.jpg'"/>
<HomeCard :href="'/rezerwacja'" :title="'Rezerwacja'" :img="'assets/images/reservation.jpg'"/>
<HomeCard :href="'/o-nas'" :title="'Restauracja'" :img="'assets/images/restaurant.jpg'"/>
      
       
    </Layout>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";
import HomeCard from "@/Components/HomeCard.vue";




</script>
