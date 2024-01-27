<template>
    <div>
        <Head title="Kontakt">
            <meta
                name="description"
                content="Craft Kitchen | Znajdź nasze dane kontaktowe i godziny otwarcia. Zapraszamy do rezerwacji stolika już dziś!"
            />
        </Head>

        <Layout
            :customClass="`bg-[url('assets/images/contact-small.webp')] sm:bg-[url('assets/images/contact-big.webp')] lg:w-5/12 xl:w-6/12`"
        >
            <template #navbar>
                <Navbar class="mt-12 sm:ml-12 lg:ml-4 xl:ml-12 mx-auto" />
            </template>

            <template #titleContent>
                <div
                    class="mb-16 sm:mb-7 sm:ml-14 lg:ml-4 xl:ml-12 text-center sm:text-start w-full md:w-1/2"
                >
                    <TitleHeading
                        :title="'Kontakt'"
                        :custom-class="'lg:text-own xl:text-9xl text-fontLight'"
                    />
                </div>
            </template>

            <template #mainContent>
                <div class="lg:w-7/12 xl:w-6/12 flex flex-col gap-2">
                    <div
                        class="grid sm:grid-cols-2 sm:grid-rows-2 w-full h-full gap-4"
                    >
                        <OpenHours></OpenHours>
                        <ImagesBox></ImagesBox>
                        <Map></Map>
                        <ContactInfo />
                    </div>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script setup>
import Layout from "./Shared/Layout.vue";
import HomeCard from "@/Components/HomeCard.vue";
import Footer from "./Shared/Footer.vue";
import FrameBox from "@/Components/FrameBox.vue";
// import DayRow from "@/Components/Contact/DayRow.vue";
import SocialIcon from "@/Components/SocialIcon.vue";
import Navbar from "./Shared/Navigation/Navbar.vue";
import TitleHeading from "./Shared/TitleHeading.vue";

import OpenHours from "@/Components/Contact/OpenHours.vue";
import ImagesBox from "@/Components/Contact/ImagesBox.vue";
import Map from "@/Components/Contact/Map.vue";
import ContactInfo from "@/Components/Contact/ContactInfo.vue";
</script>
