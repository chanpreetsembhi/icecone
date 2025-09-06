<script setup lang="ts">
import Banner from "@/assets/about.jpg";
import Journey from "@/assets/journey.png"
import Moment from "@/assets/moment.png";
import Btn from "@/components/Btn.vue";
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
                <p class="text-neutral-500 text-sm lg:text-base pb-6">From that simple dream, we've grown into a trusted
                    name in the world of ice cream cones—known for our quality, care, and unmistakable crunch. Every
                    cone we craft carries the spirit of our humble beginnings and the promise of delight in every bite.
                    As we continue to innovate and expand, one thing remains the same: our passion for creating the
                    perfect partner to your favorite scoop.</p>
                <Btn to="#" varient="primary" label="Read More" size="large" icon="mdi:arrow-right-thin" />
            </div>
        </div>
    </section>
    <!-- Create Moment -->
    <section class="bg-violet-600 text-white px-5 md:pe-0 py-20 md:py-0">
        <div class="flex items-center gap-6">
            <div class="md:w-1/2 max-w-xl mx-auto text-center md:text-start">
                <h1 class="text-4xl lg:text-6xl font-bold pb-3">Our Mission is to
                    Create Moments</h1>
                <p class="text-neutral-200 text-sm lg:text-base font-normal pb-8">
                    We believe every cone has the power to create more than just a sweet treat it creates a moment. A
                    moment of joy, laughter, or quiet indulgence. Our mission is to craft wafer cones that bring people
                    together, spark smiles, and turn everyday experiences into something a little more special. One bite
                    at a time, we're here to make life a little sweeter.
                </p>
                <Btn to="#" varient="white" label="Read More" size="large" icon="mdi:arrow-right-thin" />
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
                <h1 class="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                    Our <span class="text-violet-600">Statistics</span>
                </h1>
                <p class="text-sm leading-relaxed md:text-base">
                    What makes us special through our impressive statistics.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="font-bold text-5xl text-gray-900">91<span
                            class="text-violet-500 text-4xl align-top">+</span>
                    </h2>
                    <p class="leading-relaxed">Awards Win</p>
                </div>
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="font-bold text-5xl text-gray-900">95<span
                            class="text-violet-500 text-4xl align-top">%</span>
                    </h2>
                    <p class="leading-relaxed">Satisified Clients</p>
                </div>
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="font-bold text-5xl text-gray-900">48<span
                            class="text-violet-500 text-4xl align-top">+</span>
                    </h2>
                    <p class="leading-relaxed">Years of Experience</p>
                </div>
                <div class="bg-white border-b-4 border-violet-600 drop-shadow-sm px-4 py-10 rounded-xl text-center">
                    <h2 class="font-bold text-5xl text-gray-900">143<span
                            class="text-violet-500 text-4xl align-top">+</span>
                    </h2>
                    <p class="leading-relaxed">Employees Working</p>
                </div>
            </div>
        </div>
    </section>
</template>
