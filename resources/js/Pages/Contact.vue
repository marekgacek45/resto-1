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
            :width="' lg:w-5/12 xl:w-6/12'"
        >
            <div class="lg:w-7/12 xl:w-6/12 flex flex-col gap-2">
                <div class="grid sm:grid-cols-2 grid-rows-2 w-full h-full gap-4">
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
                        :custom-class="'grid grid-cols-2 grid-rows-2 w-full h-full gap-2 p-2 min-h-[450px] sm:min-h-0'"
                    >
                        <div
                            class="relative w-full h-full overflow-hidden rounded-xl"
                        >
                            <img
                                src="/assets/images/dish.jpg"
                                class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out"
                                alt=""
                            />
                        </div>
                        <div
                            class="relative w-full h-full overflow-hidden rounded-xl"
                        >
                            <img
                                src="/assets/images/dish.jpg"
                                class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out"
                                alt=""
                            />
                        </div>
                        <div
                            class="relative w-full h-full overflow-hidden rounded-xl"
                        >
                            <img
                                src="/assets/images/dish.jpg"
                                class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out"
                                alt=""
                            />
                        </div>
                        <div
                            class="relative w-full h-full overflow-hidden rounded-xl"
                        >
                            <img
                                src="/assets/images/dish.jpg"
                                class="object-cover w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out"
                                alt=""
                            />
                        </div>
                    </FrameBox>
                    <FrameBox>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.05616986625!2d20.028879967072353!3d49.48236599594554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e4960845d6d3%3A0xef2afa91a89443c5!2sNowy%20Targ!5e0!3m2!1spl!2spl!4v1706207330373!5m2!1spl!2spl"
                            width="400"
                            height="500"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            class="w-full h-full rounded-2xl min-h-[400px]"
                        ></iframe>
                    </FrameBox>
                    <FrameBox
                        :custom-class="'flex flex-col justify-between py-12'"
                    >
                        <div class="flex justify-center items-center gap-2">
                            <span class="opacity-50">※</span>
                            <h3 class="text-2xl uppercase">kontakt</h3>
                            <span class="opacity-50">※</span>
                        </div>
                        <div>
                            <div class="px-6 ">
                                <div
                                    class="flex justify-between items-center my-2"
                                >
                                    <span>Adres</span
                                    ><span class="text-end font-extralight"
                                        >Nowotarska 45<br />Nowy Targ</span
                                    >
                                </div>
                                <div
                                    class="flex justify-between items-center my-2"
                                >
                                    <span>Telefon</span
                                    ><a href="tel:+48537392878" class="font-extralight">537 392 878</a>
                                </div>
                                <div
                                    class="flex justify-between items-center my-2"
                                >
                                    <span>Email</span
                                    ><a href="mailto:kontakt@marekgacek.pl" class="font-extralight">kontakt@marekgacek.pl</a>
                                </div>
<div class="flex justify-center mt-12 gap-2">
    <SocialIcon>
            <a href="https://facebook.com" target="_blank"
                ><svg
                    fill="white"
                    width="16"
                    height="16"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hover:scale-110 duration-300"
                >
                    <path
                        d="M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002
                        H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z"
                    /></svg></a
        ></SocialIcon>
        <SocialIcon>
            <a href=""><svg fill="white" width="16" height="16" class="hover:scale-110 duration-300" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_412_71)"><path d="M14.6 63H5.7C2.6 63 0 60.5 0 57.5V28C0 24.9 2.5 22.5 5.7 22.5H14.6C17.7 22.5 20.3 25 20.3 28V57.5C20.4 60.5 17.8 63 14.6 63ZM5.7 27.4C5.4 27.4 5.1 27.5 5.1 27.8V57.3C5.1 57.4 5.2 57.7 5.7 57.7H14.6C14.9 57.7 15.2 57.6 15.2 57.3V28C15.2 27.9 14.9 27.6 14.6 27.6H5.7V27.4Z"/><path d="M58.7984 63H49.7984C46.6984 63 44.0984 60.5 44.0984 57.5V45.3C44.0984 44.7 43.6984 44.3 42.8984 44.3C42.2984 44.3 41.6984 44.7 41.6984 45.3V57.4C41.6984 60.5 39.1984 62.9 35.9984 62.9H27.0984C23.9984 62.9 21.3984 60.4 21.3984 57.4V28C21.3984 24.9 23.8984 22.5 27.0984 22.5H35.9984C37.8984 22.5 39.4984 23.4 40.4984 24.8C40.8984 24.7 41.3984 24.4 41.6984 24.2C44.7984 22.7 48.2984 22.3 51.4984 22.7C58.4984 23.6 63.8984 29.4 63.9984 36.4V57.7C64.2984 60.5 61.7984 63 58.7984 63ZM42.9984 39.4C46.3984 39.4 49.0984 42.2 49.0984 45.4V57.5C49.0984 57.6 49.1984 57.9 49.6984 57.9H58.5984C58.8984 57.9 59.1984 57.8 59.1984 57.5V36.3C59.0984 31.9 55.5984 28.1 50.9984 27.7C48.6984 27.4 45.9984 27.8 43.6984 28.9C42.4984 29.3 41.4984 30.1 40.4984 30.7L36.5984 33.5V28C36.5984 27.9 36.4984 27.6 35.9984 27.6H27.0984C26.7984 27.6 26.4984 27.7 26.4984 28V57.5C26.4984 57.6 26.5984 57.9 27.0984 57.9H36.0984C36.3984 57.9 36.6984 57.8 36.6984 57.5V45.3C36.8984 42 39.4984 39.4 42.9984 39.4Z"/><path d="M10.7992 21.9C4.99922 21.9 0.199219 17.2 0.199219 11.4C0.199219 5.6 4.79922 1 10.7992 1C16.7992 1 21.3992 5.7 21.3992 11.5C21.3992 17.3 16.5992 21.9 10.7992 21.9ZM10.7992 6.1C7.69922 6.1 5.09922 8.6 5.09922 11.5C5.09922 14.6 7.59922 16.9 10.7992 16.9C13.9992 16.9 16.4992 14.4 16.4992 11.5C16.4992 8.4 13.9992 6.1 10.7992 6.1Z"/></g><defs><clipPath id="clip0_412_71"><rect width="64" height="64" fill="white"/></clipPath></defs></svg></a>
        </SocialIcon>
        <SocialIcon>
            <a href="">
               
                
      
<svg fill="white" width="15" height="16" class="hover:scale-110 duration-300" version="1.1" id="lni_lni-world" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">

<path class="st0" d="M32,3.3"/>
<path d="M58.4,17.1c-4.1-7.1-11-12.4-19-14.4c-2.6-0.6-5-0.9-7.4-0.9c-2.5,0-5.1,0.3-7.6,1C16.5,4.8,9.7,10,5.7,17.2
	C3.1,21.8,1.8,26.8,1.8,32l0,0.7c0.1,5.5,1.8,10.9,4.7,15.6c4.8,7.6,12.7,12.6,21.5,13.6c1.2,0.2,2.5,0.3,4,0.3
	c1.2,0,2.5-0.1,3.7-0.2c9-1.1,16.9-6.1,21.8-13.7c3-4.6,4.6-10,4.8-15.6V32C62.3,27,60.9,21.8,58.4,17.1z M51.3,30.6
	c-0.3-3.3-1.1-6.5-2.4-9.5h6.4c1.4,3,2.2,6.3,2.4,9.5H51.3z M6.3,30.6c0.2-3.3,1-6.5,2.4-9.5h5.8c-1.3,3-2,6.2-2.3,9.5H6.3z
	 M19.5,21.1h10.2v9.5H16.8C17.1,27.2,18,24,19.5,21.1z M41.2,16.6h-7V8.3C36.5,10.1,38.8,12.9,41.2,16.6z M29.8,8.2v8.4h-7.5
	C24.8,12.8,27.3,10,29.8,8.2z M29.8,35.1v9.5h-10c-1.6-2.9-2.6-6.2-2.9-9.5H29.8z M29.8,49.1V56c-2.5-1.7-5-4.1-7.2-6.9H29.8z
	 M34.3,56v-7h7.6C39.8,51.9,37.2,54.3,34.3,56z M34.3,44.6v-9.5h12.6c-0.2,3.3-1,6.5-2.4,9.5H34.3z M34.3,30.6v-9.5h9.7
	c1.5,2.9,2.5,6.2,2.8,9.5H34.3z M52.6,16.6h-6.1c-2.2-3.7-4.4-6.7-6.6-9C45,9.2,49.5,12.4,52.6,16.6z M23.5,7.7
	c-2.2,2.3-4.4,5.3-6.6,8.8h-5.4C14.5,12.5,18.7,9.4,23.5,7.7z M6.4,35.1h5.9c0.3,3.3,1.1,6.5,2.4,9.5H9.5
	C7.8,41.6,6.8,38.4,6.4,35.1z M12.7,49.1h4.5c1.6,2.6,3.6,5,5.6,7C18.9,54.6,15.4,52.2,12.7,49.1z M41.9,55.8c2-1.9,3.8-4.2,5.2-6.6
	c0,0,0-0.1,0.1-0.1h4.1C48.7,52,45.5,54.3,41.9,55.8z M54.5,44.6h-5.2c1.2-3,1.9-6.2,2-9.5h6.2C57.2,38.4,56.1,41.6,54.5,44.6z"/>
</svg>



            </a>
        </SocialIcon>
</div>
                                
                            </div>
                        </div>
                    </FrameBox>
                </div>

                <Footer :customClass="'py-2 mt-2 hidden lg:flex'"></Footer>
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
import SocialIcon from "@/Components/SocialIcon.vue";
</script>
