<template>
    <div>
        <Head title=" Kulinarna Rozkosz">
            <meta
                name="description"
                content="Zapraszamy do Craft Kitchen, gdzie kulinarna kreatywność spotyka się z tradycyjnym rzemiosłem. Każde danie jest unikalne, a smakowe kompozycje zaskakują nawet najbardziej wyrafinowane podniebienia."
            />
        </Head>

        <Layout
            :title="'Kontakt'"
            :img="'assets/images/dish.jpg'"
            :width="'lg:w-6/12'"
        >
            <div class="w-6/12 flex flex-col gap-5">
                <div class="grid grid-cols-2 grid-rows-2 w-full h-full gap-4">
                    <FrameBox
                        :custom-class="'flex flex-col justify-between py-12'"
                    >
                        <div class="flex justify-center items-center gap-2">
                            <span class="opacity-50">※</span>
                            <h3 class="text-2xl uppercase">Godziny otwarcia</h3>
                            <span class="opacity-50">※</span>
                        </div>
                        <div class="px-12">
                            <DayRow
                                :day="'Poniedziałek'"
                                :hours="'nieczynne'"
                            />
                            <DayRow :day="'Wtorek'" :hours="'16.00 - 22.30'" />
                            <DayRow :day="'Środa'" :hours="'16.00 - 22.30'" />
                            <DayRow
                                :day="'Czwartek'"
                                :hours="'16.00 - 22.30'"
                            />
                            <DayRow :day="'Piątek'" :hours="'12.00 - 23.30'" />
                            <DayRow :day="'Sobota'" :hours="'12.00 - 23.30'" />
                            <DayRow
                                :day="'Niedziela'"
                                :hours="'12.00 - 22.30'"
                            />
                        </div>
                    </FrameBox>
                    <FrameBox
                        :custom-class="'grid grid-cols-2 grid-rows-2 w-full h-full gap-2 p-2'"
                    >
                    
    <div class="relative w-full h-full overflow-hidden rounded-xl">
       <img src="/assets/images/dish.jpg" class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out" alt="">
    </div>
    <div class="relative w-full h-full overflow-hidden rounded-xl">
       <img src="/assets/images/dish.jpg" class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out" alt="">
    </div>
    <div class="relative w-full h-full overflow-hidden rounded-xl">
       <img src="/assets/images/dish.jpg" class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out" alt="">
    </div>
    <div class="relative w-full h-full overflow-hidden rounded-xl">
       <img src="/assets/images/dish.jpg" class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out" alt="">
    </div>

                       
                    </FrameBox>
                    <FrameBox></FrameBox>
                    <FrameBox></FrameBox>
                </div>

                <Footer></Footer>
            </div>
        </Layout>
    </div>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";
import HomeCard from "@/Components/HomeCard.vue";
import Footer from "./Shared/Footer.vue";
import FrameBox from "@/Components/FrameBox.vue";
import DayRow from "@/Components/DayRow.vue";
</script>
