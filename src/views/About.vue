<script setup lang="ts">
import Banner from "@/assets/about.jpg";
import Journey from "@/assets/journey.png"
import Moment from "@/assets/moment.png";
import { Icon } from "@iconify/vue";
</script>
<template>
    <!-- banner -->
    <section class="relative h-60 md:h-96">
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center px-4">
            <h1 class="text-4xl md:text-6xl font-bold text-center pb-3">
                About Us
            </h1>
            <p class="text-sm md:text-base font-normal text-neutral-200">Discover who we are, what we do, and why we do
                it.
            </p>
        </div>
        <div class="bg-black/30 backdrop-blur-xs absolute top-0 size-full"></div>
        <img :src="Banner" alt="banner" class="object-cover object-top h-60 md:h-96 w-full">
    </section>
    <!-- journey -->
    <section class="py-20 px-5">
        <div class="lg:max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div class="lg:w-1/2">
                <img :src="Journey" alt="journey" class="md:w-lg">
            </div>
            <div class="lg:w-1/2 text-center md:text-start">
                <h1 class="text-4xl lg:text-6xl font-bold pb-4">Our <span class="text-violet-500">Journey</span>
                    Began
                    With a Simple Dream</h1>
                <p class="text-neutral-500 text-sm lg:text-base pb-3">Our goal is to make the best ice cream using only
                    the finest,
                    natural ingredients. From rich, creamy classics to adventurous
                    new creations, every flavor is meticulously crafted in-house to
                    ensure the highest quality and freshness.</p>
                <p class="text-neutral-500 text-sm lg:text-base pb-6">We take pride in offering a diverse range of
                    options, including
                    dairy-free, vegan, and gluten-free choices, so everyone can find
                    their perfect scoop.</p>
                <RouterLink to=""
                    class="bg-violet-600 text-white font-medium rounded-full inline-flex items-center gap-0.5 px-6 py-3">
                    Read More
                    <Icon icon="mdi:arrow-right-thin" width="24" />
                </RouterLink>
            </div>
        </div>
    </section>
    <!-- Create Moment -->
    <section class="bg-violet-600 text-white px-5 md:pe-0 py-20 md:py-0">
        <div class="flex items-center gap-6">
            <div class="md:w-1/2 max-w-xl mx-auto text-center md:text-start">
                <h1 class="text-4xl lg:text-6xl font-bold pb-3">Our Mission is to
                    Create Moments</h1>
                <p class="text-neutral-100 text-sm lg:text-base font-normal pb-8">We strive to foster a welcoming and
                    joyful environment
                    where customers of all ages can gather, celebrate, and
                    make lasting memories. Our commitment extends beyond
                    serving great ice cream.</p>
                <RouterLink to=""
                    class="bg-white text-violet-600 font-medium rounded-full inline-flex items-center gap-0.5 px-6 py-3">
                    Read More
                    <Icon icon="mdi:arrow-right-thin" width="24" />
                </RouterLink>
            </div>
            <div class="md:w-1/2 hidden md:flex">
                <img :src="Moment" alt="moments">
            </div>
        </div>
    </section>
    <!-- team member -->
    <section class="bg-white py-20 px-5">
        <div class="max-w-sm md:max-w-7xl mx-auto">
            <div class="text-center mb-10">
                <h1 class="text-4xl md:text-5xl font-bold pb-2">Our <span class="text-violet-500">Team</span> Members
                </h1>
                <p class="text-neutral-500">Get to know the friendly faces behind your favorite flavors.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="text-center p-6">
                    <img src="https://avatar.iran.liara.run/public/14" alt="team" class="size-52 mx-auto">
                    <div class="pt-4">
                        <h4 class="text-xl font-medium">Marvin Joner</h4>
                        <p class="text-neutral-500 text-sm">Bakery Worker</p>
                    </div>
                    <div class="flex items-center justify-center gap-2 mt-3">
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:instagram" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:whatsapp" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:email-outline" width="100%" />
                        </a>
                    </div>
                </div>
                <div class="text-center p-6">
                    <img src="https://avatar.iran.liara.run/public/16" alt="team" class="size-52 mx-auto">
                    <div class="pt-4">
                        <h4 class="text-xl font-medium">Patricia Woodrum</h4>
                        <p class="text-neutral-500 text-sm">Staff Worker</p>
                    </div>
                    <div class="flex items-center justify-center gap-2 mt-3">
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:instagram" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:whatsapp" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:email-outline" width="100%" />
                        </a>
                    </div>
                </div>
                <div class="text-center p-6">
                    <img src="https://avatar.iran.liara.run/public/18" alt="team" class="size-52 mx-auto">
                    <div class="pt-4">
                        <h4 class="text-xl font-medium">James Carter</h4>
                        <p class="text-neutral-500 text-sm">Manager</p>
                    </div>
                    <div class="flex items-center justify-center gap-2 mt-3">
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:instagram" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:whatsapp" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:email-outline" width="100%" />
                        </a>
                    </div>
                </div>
                <div class="text-center p-6">
                    <img src="https://avatar.iran.liara.run/public/20" alt="team" class="size-52 mx-auto">
                    <div class="pt-4">
                        <h4 class="text-xl font-medium">Hannaz Stone</h4>
                        <p class="text-neutral-500 text-sm">Shop Worker</p>
                    </div>
                    <div class="flex items-center justify-center gap-2 mt-3">
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:instagram" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:whatsapp" width="100%" />
                        </a>
                        <a href="#"
                            class="bg-violet-200 hover:bg-violet-500 hover:text-white size-9 rounded-full grid place-content-center p-2">
                            <Icon icon="mdi:email-outline" width="100%" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Statics -->
    <section class="bg-neutral-50 text-gray-600 body-font px-5">
        <div class="max-w-sm md:max-w-7xl py-20 mx-auto">
            <div class="flex flex-col text-center w-full mb-14">
                <h1 class="text-4xl md:text-5xl font-bold title-font mb-2 text-gray-900">
                    Our <span class="text-violet-600">Statistics</span>
                </h1>
                <p class="text-sm leading-relaxed md:text-base">
                    What makes us special through our impressive statistics.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="title-font font-bold text-5xl text-gray-900">91<span
                            class="text-violet-500 text-4xl align-top">+</span>
                    </h2>
                    <p class="leading-relaxed">Awards Win</p>
                </div>
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="title-font font-bold text-5xl text-gray-900">95<span
                            class="text-violet-500 text-4xl align-top">%</span>
                    </h2>
                    <p class="leading-relaxed">Satisified Clients</p>
                </div>
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="title-font font-bold text-5xl text-gray-900">48<span
                            class="text-violet-500 text-4xl align-top">+</span>
                    </h2>
                    <p class="leading-relaxed">Years of Experience</p>
                </div>
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="title-font font-bold text-5xl text-gray-900">143<span
                            class="text-violet-500 text-4xl align-top">+</span>
                    </h2>
                    <p class="leading-relaxed">Employees Working</p>
                </div>
            </div>
        </div>
    </section>
</template>
