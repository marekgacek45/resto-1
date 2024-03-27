<template>
    <div>
        <Head title="O nas">
            <meta
                name="description"
                content="Craft Kitchen | Restauracja kameralna, gdzie styl spotyka smak. Odkryj unikalne doznania kulinarne w sercu miasta."
            />
        </Head>

        <Layout
            :customClass="`bg-[url('/assets/images/about-small.webp')] sm:bg-[url('/assets/images/about-big.webp')] bg-gray-300 bg-blend-multiply lg:w-5/12 xl:w-6/12`"
        >
            <template #navbar>
                <Navbar class="mt-12 sm:ml-12 lg:ml-4 xl:ml-12 mx-auto" />
            </template>

            <template #titleContent>
                <div
                    class="mb-16 sm:mb-7 sm:ml-14 lg:ml-4 xl:ml-12 text-center sm:text-start w-full "
                >
                    <TitleHeading
                        :title="'O nas'"
                        :custom-class="'lg:text-own xl:text-9xl text-fontLight'"
                    />
                </div>
            </template>

            <template #mainContent>
                <div
                    class="lg:w-8/12 xl:w-7/12 flex flex-col gap-4 justify-between"
                >
                    <div class="flex flex-col sm:flex-row gap-4 h-1/2">
                        <FrameBox custom-class="sm:w-7/12 overflow-hidden"
                            ><img
                                src="/assets/images/about-1.webp"
                                alt="danie naszej restauracji"
                                class="object-cover h-full hover:scale-110 duration-300"
                        /></FrameBox>

                        <FrameBox
                            custom-class="sm:w-6/12 p-6 lg:p-4 xl:p-6 flex flex-col "
                        >
                            <h3 class="text-3xl uppercase mb-6 sm:mb-0">
                                Kultywacja Tradycji
                            </h3>
                            <span class="self-center mt-4 opacity-40">※※※</span>
                            <p class="text-sm font-thin mt-4 ">
                                W restauracji Craft Kitchen odkrywam zapomniane
                                smaki, przenosząc Gości w podróż kulinarnej
                                ekscytacji do niezwykłej i zaskakującej kuchni
                                europejskiej.
                            </p>
                            <p class="text-sm font-thin mt-4 inline-block">
                                Niewielu zdaje sobie sprawę, jak wyjątkowe dania
                                królowały na stołach w minionych epokach w
                                Europie, a moją misją jest edukacja i
                                pielęgnowanie tradycji kulinarnej z tego
                                regionu.
                            </p>
                        </FrameBox>
                    </div>
                    <div
                        class="grid grid-cols-3 grid-row 1 gap-4 lg:hidden 2xl:grid"
                    >
                        <a href="https://tripadvisor.com" target="_blank">
                            <FrameBox
                                custom-class="p-4 flex flex-col text-center gap-2"
                            >
                                <StarsBox />
                                <h3 class="text-3xl uppercase">trip advisor</h3>
                            </FrameBox>
                        </a>
                        <a href="https://kukbuk.pl" target="_blank">
                            <FrameBox
                                custom-class="p-4 flex flex-col text-center gap-2"
                            >
                                <StarsBox />
                                <h3 class="text-3xl uppercase">kukbuk</h3>
                            </FrameBox>
                        </a>
                        <a href="https://google.com" target="_blank">
                            <FrameBox
                                custom-class="p-4 flex flex-col text-center gap-2"
                            >
                                <StarsBox />
                                <h3 class="text-3xl uppercase">google</h3>
                            </FrameBox>
                        </a>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 h-1/2">
                        <FrameBox
                            custom-class="sm:w-6/12 p-6 lg:p-4 xl:p-6 flex flex-col  order-1 sm:order-none "
                        >
                     

                            <h3 class="text-3xl uppercase mb-6 sm:mb-0">
                                Unikatowe doświadczenie
                            </h3>
                            <span class="self-center mt-4 opacity-40">※※※</span>
                        
                        <p class="text-sm font-thin mt-4 ">
                                
Niezmiernie ważne jest dla nas nie tylko zapewnienie wysokiej jakości i sprawdzonego pochodzenia składników, ale także utrzymywanie silnych więzi z lokalnymi rolnikami i dostawcami.
                            </p>
                            <p class="text-sm font-thin mt-4 ">
                                Nasza pasja do kulinarnego dziedzictwa europejskiego sprawia, że każdy nasz przepis stanowi niepowtarzalne doświadczenie smakowe, łącząc tradycję z innowacyjnością w kuchni.
                            </p>
                        </FrameBox>
                        <FrameBox custom-class="sm:w-7/12  overflow-hidden"
                            ><img
                                src="/assets/images/about-2.webp"
                                alt="lokalne sery z naszej restauracji"
                                class="object-cover h-full hover:scale-110 duration-300"
                        /></FrameBox>
                    </div>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";
import FrameBox from "@/Components/FrameBox.vue";
import Navbar from "./Shared/Navigation/Navbar.vue";
import TitleHeading from "./Shared/TitleHeading.vue";
import StarsBox from "@/Components/StarsBox.vue";
</script>
