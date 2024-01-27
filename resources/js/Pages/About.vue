<template>
    <div>
        <Head title="O nas">
            <meta
                name="description"
                content="Craft Kitchen | Restauracja kameralna, gdzie styl spotyka smak. Odkryj unikalne doznania kulinarne w sercu miasta."
            />
        </Head>

        <Layout
            :customClass="`bg-[url('assets/images/about-small.webp')] sm:bg-[url('assets/images/about-big.webp')] bg-gray-300 bg-blend-multiply lg:w-5/12 xl:w-6/12`"
        >
            <template #navbar>
                <Navbar class="mt-12 sm:ml-12 lg:ml-4 xl:ml-12 mx-auto" />
            </template>

            <template #titleContent>
                <div
                    class="mb-16 sm:mb-7 sm:ml-14 lg:ml-4 xl:ml-12 text-center sm:text-start w-full md:w-1/2"
                >
                    <TitleHeading
                        :title="'O nas'"
                        :custom-class="'lg:text-own xl:text-9xl text-fontLight'"
                    />
                </div>
            </template>

            <template #mainContent>
                <div class="lg:w-7/12 xl:w-7/12 flex flex-col gap-4 justify-between">
                  
                    <div class="flex flex-col sm:flex-row gap-4 h-1/2">
                        
                            <FrameBox custom-class="sm:w-7/12 overflow-hidden"><img src="/assets/images/about-1.webp" alt="danie naszej restauracji" class="object-cover h-full hover:scale-110 duration-300" ></FrameBox>
                        <FrameBox custom-class="sm:w-6/12 p-8 flex flex-col justify-between">
                            <h3 class="text-3xl uppercase mb-6 sm:mb-0">Kultywacja Tradycji</h3>
                            <p class=" text-sm font-thin">W restauracji Craft Kitchen odkrywam zapomniane smaki, przenosząc Gości w podróż kulinarnej ekscytacji do niezwykłej i zaskakującej kuchni europejskiej.</p>
                            <p class=" text-sm font-thin ">
Niewielu zdaje sobie sprawę, jak wyjątkowe dania królowały na stołach w minionych epokach w Europie, a moją misją jest edukacja i pielęgnowanie tradycji kulinarnej z tego regionu.</p>
                        </FrameBox>
                    
                    </div>
                    <div class="grid grid-cols-3 grid-row 1 gap-4  lg:hidden xl:grid">
<FrameBox custom-class="p-4 flex flex-col text-center gap-2">
   <div class="flex gap-1 justify-center items-center">

       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
</div>
<h3 class="text-3xl uppercase">trip advisor</h3>
</FrameBox>                       
<FrameBox custom-class="p-4 flex flex-col text-center gap-2">
   <div class="flex gap-1 justify-center items-center">

       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
</div>
<h3 class="text-3xl uppercase">kukbuk</h3>
</FrameBox>                       
<FrameBox custom-class="p-4 flex flex-col text-center gap-2">
   <div class="flex gap-1 justify-center items-center">

       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
       <svg fill="#efe7d2" width="25" height="25" version="1.1" id="lni_lni-star-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
       y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
       <path d="M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9
       c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z"/>
    </svg>
</div>
<h3 class="text-3xl uppercase">google</h3>
</FrameBox>                       
                    
                        
                        
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 h-1/2">
                        
                        <FrameBox custom-class="sm:w-6/12 p-8 flex flex-col justify-between order-1 sm:order-0 ">
                            <h3 class="text-3xl uppercase mb-6 sm:mb-0">Unikatowe doświadczenie</h3>
                            <p class=" text-sm font-thin">Angażujemy się w zapewnienie wysokiej jakości i sprawdzonego pochodzenia wszystkich składników, ściśle współpracując z lokalnymi rolnikami i dostawcami, zgodnie z filozofią od pola do stołu. Dzięki temu starannie tworzymy wyjątkowe doznania kulinarne poprzez nasze autorskie przepisy w kuchni europejskiej.</p>
                            <p class=" text-sm font-thin "></p>
                               
                            </FrameBox>
                            <FrameBox custom-class="sm:w-7/12  overflow-hidden"><img src="/assets/images/about-2.webp" alt="lokalne sery z naszej restauracji" class="object-cover h-full hover:scale-110 duration-300"></FrameBox>
                
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
