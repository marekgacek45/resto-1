<template>
    <div>
        <Head title="Menu">
            <meta
                name="description"
                content="Craft Kitchen | Sprawdź nasze kultowe pozycje. Zapraszamy do rezerwacji stolika już dziś!"
            />
        </Head>

        <Layout
            :customClass="`bg-[url('/assets/images/menu-small.webp')] sm:bg-[url('/assets/images/menu-big.webp')] lg:w-5/12 xl:w-6/12`"
        >
            <template #navbar>
                <Navbar class="mt-12 sm:ml-12 lg:ml-4 xl:ml-12 mx-auto" />
            </template>

            <template #titleContent>
                <div
                    class="mb-16 sm:mb-7 sm:ml-14 lg:ml-4 xl:ml-12 text-center sm:text-start w-full md:w-1/2"
                >
                    <TitleHeading
                        :title="'Menu'"
                        :custom-class="'lg:text-own xl:text-9xl text-fontDark'"
                    />
                </div>
            </template>

            <template #mainContent>
                <div class="lg:overflow-y-scroll lg:w-7/12 xl:w-6/12  p-2 sm:p-8 lg:p-6 xl:p-8 text-white">
                    <div class="flex justify-center items-center gap-4">
                        <a href="#przystawki">
                        <button
                            class="border border-primaryColor border-opacity-20 hover:border-opacity-50 rounded-xl text-fontLight duration-300 px-4 py-2 text-sm font-thin uppercase"
                        >
                           Przystawki
                        </button></a>
                        <a href="#dania-glowne">
                        <button
                            class="border border-primaryColor border-opacity-20 hover:border-opacity-50 rounded-xl text-fontLight duration-300 px-4 py-2 text-sm font-thin uppercase"
                        >
                            dania główne
                        </button></a>

                        <a href="#desery"> <button
                            class="border border-primaryColor border-opacity-20 hover:border-opacity-50 rounded-xl text-fontLight duration-300 px-4 py-2 text-sm font-thin uppercase"
                        >
                           desery
                        </button></a>
                    </div>
                    <div id="przystawki" class="mt-12 flex flex-col 2xl:px-24">
                        <div
                            class="flex justify-center items-center gap-2 mb-10"
                        >
                            <span class="opacity-50">※</span>
                            <h2 class="text-4xl uppercase">Przystawki</h2>
                            <span class="opacity-50">※</span>
                        </div>
                        <DishBox
                            title="Krem z dyni z grzankami z pesto"
                            price="24"
                        >
                            dynia, cebula, bulion warzywny, śmietana, pesto,
                            chleb</DishBox
                        >
                        <DishBox title="Sałatka caprese z burratą" price="28">
                            burrata, pomidory, bazylia, oliwa z oliwek</DishBox
                        >
                        <DishBox title="Tatar z Łososia" price="32">
                            filet z łososia, cebula, kapary, świeży
                            koperek</DishBox
                        >
                        <DishBox
                            title="Escargots ziołowe z bagietką"
                            price="36"
                        >
                            ślimaki, masło ziołowe, czosnek, bagietka</DishBox
                        >

                        <DishBox
                            title="Grillowane krewetki na maśle"
                            price="38"
                        >
                            krewetki, czosnek, masło, świeży pietruszka</DishBox
                        >
                    </div>
                    <div id="dania-glowne" class="mt-12 flex flex-col 2xl:px-24">
                        <div
                            class="flex justify-center items-center gap-2 mb-10"
                        >
                            <span class="opacity-50">※</span>
                            <h2 class="text-4xl uppercase">Dania główne</h2>
                            <span class="opacity-50">※</span>
                        </div>
                        <DishBox
                            title="Risotto z grzybami i szparagami"
                            price="42"
                        >
                        ryż arborio, grzyby, szparagi, cebula, bulion warzywny, parmezan</DishBox
                        >
                        <DishBox
                            title="Kotlet schabowy z ziemniakami i mizerią"
                            price="48"
                        >
                        schab, ziemniaki, mizeria (ogórek, śmietana, szczypiorek), jajko</DishBox
                        >
                        <DishBox
                            title="Tagliatelle z krewetkami"
                            price="52"
                        >
                        krewetki, pomidory, czosnek, cebula, makaron, bazylia</DishBox
                        >
                        <DishBox
                            title="Dorsz pieczony z ziołami "
                            price="52"
                        >
                        dorsz, zioła, ziemniaki, masło, śmietana</DishBox
                        >
                        <DishBox
                            title="Pieczeń jagnięca"
                            price="58"
                        >
                        jagnięcina, czerwone wino, cebula, marchew, ziemniaki</DishBox
                        >
                    </div>
                    <div id="desery" class="mt-12 flex flex-col 2xl:px-24">
                        <div
                            class="flex justify-center items-center gap-2 mb-10"
                        >
                            <span class="opacity-50">※</span>
                            <h2 class="text-4xl uppercase">Desery</h2>
                            <span class="opacity-50">※</span>
                        </div>
                        <DishBox
                            title="Tiramisu z mascarpone"
                            price="26"
                        >
                        biszkopt, kawa, mascarpone, jajka, kakao</DishBox
                        >
                        <DishBox
                            title="Clafoutis z wiśniami"
                            price="30"
                        >
                        wiśnie, mąka, jajka, mleko, cukier, wanilia</DishBox
                        >
                        <DishBox
                            title="Panna cotta z musem z malin"
                            price="34"
                        >
                        śmietana, cukier, żelatyna, maliny, cukier puder.</DishBox
                        >
                        </div>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";

import Navbar from "./Shared/Navigation/Navbar.vue";
import TitleHeading from "./Shared/TitleHeading.vue";

import DishBox from "@/Components/DishBox.vue";
</script>
