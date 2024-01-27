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
                <div
                    class="py-12 lg:py-0 px-6 md:px-32 lg:px-6 xl:px-20 text-center lg:w-5/12 xl:5/12 flex justify-center flex-col border border-primaryColor border-opacity-20 hover:border-opacity-50 rounded-2xl text-fontLight duration-300"
                >
                    <div class="flex justify-center items-center gap-2 mb-2 justify-self-start">
                        <span class="opacity-50">※</span>
                        <h3 class="text-5xl uppercase">kontakt</h3>
                        <span class="opacity-50">※</span>
                    </div>
                    <span class="px-8 text-base font-thin"
                        >Dziękujemy za zaufanie, jakim nas obdarzacie, i nie
                        możemy się doczekać, abyście delektowali się wykwintnymi
                        smakami i elegancją, jaką dla Was przygotowaliśmy.</span
                    >

                    <form
                        v-if="!sendForm"
                        @submit.prevent="submitForm"
                        method="post"
                        class="mt-12"
                    >
                        <Field>
                            <input
                                class="text-black w-full border-2 border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="name"
                                type="text"
                                placeholder="Imię i Nazwisko"
                                v-model="form.name"
                                required
                            />
                        </Field>
                        <Field>
                            <input
                                class="text-black w-full border-2 border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="email"
                                type="email"
                                placeholder="Email"
                                v-model="form.email"
                                required
                            />
                        </Field>
                        <Field>
                            <input
                                class="text-black w-full border-2 border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="tel"
                                type="tel"
                                placeholder="Telefon"
                                v-model="form.phone"
                                required
                            />
                        </Field>
                        <Field>
                            <input
                                class="text-black w-full border-2 border-primaryColor rounded-xl focus:border-secondaryColor"
                                id="date"
                                type="text"
                                placeholder="Data oraz Godzina"
                                onfocus="this.type='datetime-local'"
                                v-model="form.date"
                                required
                            />
                        </Field>
                        <Field>
                            <textarea
                                rows="5"
                                class="text-black w-full border-2 border-primaryColor rounded-xl focus:border-secondaryColor"
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

                    <div v-else>
                        <div class="flex flex-col justify-center items-center mt-12 lg:mt-48 lg:mb-56 gap-5">
                            <svg
                                fill="white"
                                width="52"
                                height="52"
                                version="1.1"
                                id="lni_lni-checkmark-circle"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 64 64"
                                style="enable-background: new 0 0 64 64"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        d="M32,1.8C15.3,1.8,1.8,15.3,1.8,32S15.3,62.3,32,62.3S62.3,48.7,62.3,32S48.7,1.8,32,1.8z M32,57.8
		C17.8,57.8,6.3,46.2,6.3,32C6.3,17.8,17.8,6.3,32,6.3c14.2,0,25.8,11.6,25.8,25.8C57.8,46.2,46.2,57.8,32,57.8z"
                                    />
                                    <path
                                        d="M40.6,22.7L28.7,34.3L23.3,29c-0.9-0.9-2.3-0.8-3.2,0c-0.9,0.9-0.8,2.3,0,3.2l6.4,6.2c0.6,0.6,1.4,0.9,2.2,0.9
		c0.8,0,1.6-0.3,2.2-0.9L43.8,26c0.9-0.9,0.9-2.3,0-3.2S41.5,21.9,40.6,22.7z"
                                    />
                                </g>
                            </svg>
                            <span class="px-8 text-base font-thin">Skontaktujemy się z Tobą w celu potwierdzenia rezerwacji</span>
                        </div>
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
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";


import Field from "@/components/Form/Field.vue";
import Input from "@/components/Form/Input.vue";


import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const form = useForm({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
});

const sendForm = ref(true);

const submitForm = () => {
    form.post("/rezerwacja", {
        preserveScroll: true,
        onSuccess: () => {
            sendForm.value = !sendForm.value;
            
        },
    });
};
</script>
