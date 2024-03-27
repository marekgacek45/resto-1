<template>
    <form
        v-if="!sendForm"
        @submit.prevent="submitForm"
        method="post"
        class="mt-12"
    >
        <Field>
            <Input
                id="name"
                type="text"
                placeholder="Imię i Nazwisko"
                v-model="form.name"
                required
                />
                <Error v-if="form.errors.name">{{ form.errors.name}}</Error>
        </Field>
        <Field>
            <Input
                id="email"
                type="email"
                placeholder="Email"
                v-model="form.email"
                required
            />
            <Error v-if="form.errors.email">{{ form.errors.email}}</Error>
        </Field>
        <Field>
            <Input
                id="phone"
                type="tel"
                placeholder="Telefon"
                v-model="form.phone"
                required
            />
            <Error v-if="form.errors.phone">{{ form.errors.phone}}</Error>
        </Field>
        <Field>
            <Input
                id="date"
                type="text"
                placeholder="Data oraz Godzina"
                onfocus="this.type='datetime-local'"
                v-model="form.date"
                required
                
            />
            <Error v-if="form.errors.date">{{ form.errors.date}}</Error>
        </Field>
        <Field>
            <TextArea
                rows="5"
                class="text-black w-full border-2 border-primaryColor rounded-xl focus:border-secondaryColor"
                id="message"
                placeholder="Wiadomość"
                v-model="form.message"
            ></TextArea>
            <Error v-if="form.errors.message">{{ form.errors.message}}</Error>
        </Field>

        <Field class="flex">
            <PrimaryButton type="submit" :disabled="form.processing">Zarezerwuj</PrimaryButton>
        </Field>
    </form>

    <div v-else>
        <FormSuccess></FormSuccess>
    </div>
</template>

<script setup>
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";
import Field from "@/Components/Form/Field.vue";
import Input from "@/Components/Form/Input.vue";
import FormSuccess from "@/Components/Form/FormSuccess.vue";
import TextArea from "@/Components/Form/TextArea.vue";
import Error from "@/Components/Form/Error.vue"

import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";



const form = useForm({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
});

defineProps({ errors: Object })

const sendForm = ref(false);

const submitForm = () => {
    form.post(route('contact'), {
        preserveScroll: true,
        onSuccess: () => {
            sendForm.value = !sendForm.value;
        },
    });
};
</script>
