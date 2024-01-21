<template>
    <Layout :title="'strona główna'" :img="'assets/images/dish.jpg'">
    
<HomeCard :title="'Menu'" :img="'assets/images/main-small.jpg'"/>
<HomeCard :title="'Rezerwacja'" :img="'assets/images/reservation.jpg'"/>
<HomeCard :title="'Restauracja'" :img="'assets/images/restaurant.jpg'"/>
      
       
    </Layout>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";
import HomeCard from "@/Components/HomeCard.vue";



</script>
