<template>
    <div>
        <Head title="Rezerwacja">
            <meta
                name="description"
                content="Craft Kitchen | Znajdź nasze dane kontaktowe i godziny otwarcia. Zapraszamy do rezerwacji stolika już dziś!"
            />
        </Head>

        <Layout
            :customClass="`lg:w-7/12 xl:w-7/12 bg-[url('assets/images/reservation-small.webp')] sm:bg-[url('assets/images/reservation-big.webp')]  `"
        >
            <template #navbar>
                <Navbar class="mt-12 sm:ml-12 lg:ml-4 xl:ml-12 mx-auto" />
            </template>

            <template #titleContent>
                <div
                    class="mb-16 sm:mb-7 sm:ml-14 lg:ml-4 xl:ml-12 text-center sm:text-start w-full md:w-1/2"
                >
                    <TitleHeading
                        :title="'Rezerwacja'"
                        :custom-class="'lg:text-own xl:text-9xl text-fontLight'"
                    />
                </div>
            </template>

            <template #mainContent>
                <div class=" py-12 lg:py-0 px-6 md:px-32 lg:px-6 xl:px-20 text-center lg:w-5/12 xl:5/12 flex justify-center flex-col border border-primaryColor border-opacity-20 hover:border-opacity-50 rounded-2xl text-fontLight duration-300"
                >
                    <div class="flex justify-center items-center gap-2 mb-2">
                        <span class="opacity-50">※</span>
                        <h3 class="text-5xl uppercase">kontakt</h3>
                        <span class="opacity-50">※</span>
                    </div>
                    <span class="px-8 text-base font-thin"
                        >Dziękujemy za zaufanie, jakim nas obdarzacie, i nie
                        możemy się doczekać, abyście delektowali się wykwintnymi
                        smakami i elegancją, jaką dla Was przygotowaliśmy.</span
                    >

                    <form @submit.prevent="form.post('/rezerwacja')"   method="post" class="mt-12">
                        <Field>
                            <input  class=" text-black w-full border-2  border-primaryColor rounded-xl focus:border-secondaryColor"   id="name"
                                type="text"
                                placeholder="Imię i Nazwisko"
                                v-model="form.name"
                                required/>
                            
                        </Field>
                        <Field>
                            <input  class=" text-black w-full border-2  border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="email"
                                type="email"
                                placeholder="Email"
                                v-model="form.email"
                                required
                            />
                        </Field>
                        <Field>
                            <input  class=" text-black w-full border-2  border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="tel"
                                type="tel"
                                placeholder="Telefon"
                                v-model="form.phone"
                                required
                            />
                        </Field>
                        <Field>
                            <input  class=" text-black w-full border-2  border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="date"
                                type="text"
                                placeholder="Data oraz Godzina"
                                onfocus="this.type='datetime-local'"
                                v-model="form.date"
                                required
                            />
                           
                        </Field>
                        <Field>
                            <textarea rows="5" class=" text-black w-full border-2  border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="message"
                                placeholder="Wiadomość"
                                v-model="form.message"
                            ></textarea>
                        </Field>

                        <Field class="flex">
                            <PrimaryButton type="submit"
                                >Zarezerwuj</PrimaryButton
                            >
                        </Field>
                    </form>
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
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";

import Field from "@/components/Form/Field.vue";
import Input from "@/components/Form/Input.vue";
import TextArea from "@/components/Form/TextArea.vue";


import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name:'',
    email:'',
    phone:'',
    date:'',
    message:'',
})




</script>
