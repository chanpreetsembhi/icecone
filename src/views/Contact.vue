<script setup lang="ts">
import { ref } from 'vue';
import Inputfield from '@/components/InputField.vue';
import Textarea from '@/components/Textarea.vue';

const name = ref('');
const email = ref('');
const message = ref('');
</script>

<template>
    <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="text-4xl font-bold title-font mb-4 text-gray-900">Contact Us</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Have a question, suggestion, or just want to say hello? We'd love to hear from you!
                </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-col md:flex-row flex-wrap -m-2">
                    <Inputfield name="full_name" title="Name" v-model="name" placeholder="Enter your name"
                        class="p-2 md:w-1/2" />
                    <Inputfield name="email_address" title="Email" type="email" v-model="email"
                        placeholder="Enter your email" class="p-2 md:w-1/2" />
                    <Textarea name="message" title="Message" v-model="message" class="w-full p-2" />
                    <div class="mt-5 w-full">
                        <button
                            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>