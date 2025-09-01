<script setup lang="ts">
import Banner from "@/assets/banner.png";
import Card from "@/components/Card.vue";
import Product from "@/api/data.json";
import { Icon } from "@iconify/vue";
import VeganImg from "@/assets/vegan.png";
import dots from "@/assets/60.png";
import lines from "@/assets/61.png"
const limit = 4;
</script>
<template>
    <!-- Banner section -->
    <section class="bg-violet-600 text-white py-20 px-5">
        <div class="max-w-sm md:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
            <div class="text-center md:text-start order-1 md:order-0">
                <h5 class="text-xl md:text-2xl pb-1">Welcome to The</h5>
                <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold pb-4">Discover Sweet<br /> Delights!</h1>
                <p class="text-sm md:text-base mb-8">Relish the timeless taste of handcrafted ice cream,<br /> made with
                    passion and the finest ingredients.
                </p>
                <a href="#"
                    class="inline-flex items-center gap-1 bg-white text-black font-medium text-sm px-5 py-3 rounded-full">
                    Browse Our Classic Flavors
                    <Icon icon="mdi:arrow-right-thin" width="20" />
                </a>
            </div>
            <div class="max-w-sm lg:max-w-lg order-0 md:order-1">
                <img :src="Banner" alt="header">
            </div>
        </div>
    </section>
    <!-- products -->
    <section class="bg-neutral-50 py-20 px-5">
        <div class="lg:max-w-7xl mx-auto">
            <div class="flex items-end justify-between pb-5">
                <h5 class="text-xl lg:text-2xl font-bold">Popular Item</h5>
                <RouterLink to="/products" class="text-neutral-500 hover:text-violet-600 text-sm">See All</RouterLink>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <Card v-for="(item, index) in Product.slice(0, limit)" :key="index" :id="item.id" :img="item.img_url"
                    :title="item.name" :category="item.category" :price="item.price" />
            </div>
        </div>
    </section>
    <!-- Vegan -->
    <section class="bg-violet-200 py-20 px-5 lg:px-0">
        <div class="bg-white max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <img :src="VeganImg" alt="vegan" class="md:w-1/2">
            <div class="md:w-1/2 p-8 md:p-6">
                <h1 class="md:text-3xl lg:text-5xl font-bold pb-3 md:pb-6">Our Guilt-Free
                    <span class="text-violet-600">Vegan</span>
                    Ice Cream
                </h1>
                <p class="text-neutral-500 text-sm lg:text-base pb-6 md:pb-8">Enjoy creamy, dairy-free ice cream that’s
                    both tasty
                    and kind to the planet.</p>
                <RouterLink to="/products"
                    class="bg-violet-600 text-white font-medium rounded-full inline-flex items-center gap-0.5 px-6 py-3">
                    See
                    Our
                    Vegan Menu
                    <Icon icon="mdi:arrow-right-thin" width="24" />
                </RouterLink>
            </div>
        </div>
    </section>
    <!-- Testimonial -->
    <section class="bg-white text-gray-600 body-font px-5">
        <div class="max-w-sm md:max-w-7xl py-20 mx-auto">
            <div class="text-center mb-18">
                <h1 class="font-bold text-black text-4xl md:text-5xl pb-3">What <br /><span
                        class="text-violet-500">Customer's</span> Says</h1>
                <p class="text-neutral-500 text-sm md:text-base">Read testimonials from those who have enjoyed our
                    artisan gelato.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="mb-6 p-4">
                    <div class="h-full text-center">
                        <img alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                            src="https://avatar.iran.liara.run/public/84">
                        <p class="leading-relaxed">I’ve tried a lot of ice cream brands, but this one blew me away! The
                            "Strawberry Cheesecake Swirl" was creamy, rich, and full of real fruit chunks. The packaging
                            was cute, and it arrived still perfectly frozen. Definitely ordering again soon!</p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Sarah M</h2>
                        <p class="text-gray-500">Consultant</p>
                    </div>
                </div>
                <div class="mb-6 p-4">
                    <div class="h-full text-center">
                        <img alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                            src="https://avatar.iran.liara.run/public/5">
                        <p class="leading-relaxed">Great selection of flavors and super easy to order. I got the
                            "Midnight Mint Chip" and "Peanut Butter Blast"—both were amazing. Only reason I’m giving 4
                            stars is that one of the pints was slightly soft on arrival, but it was still delicious!</p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">James R</h2>
                        <p class="text-gray-500">UI Develeoper</p>
                    </div>
                </div>
                <div class="p-4">
                    <div class="h-full text-center">
                        <img alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                            src="https://avatar.iran.liara.run/public/19">
                        <p class="leading-relaxed">This is hands down the best vegan ice cream I’ve ever tasted. The
                            "Coconut Mocha Crunch" was creamy and satisfying without being too sweet. I loved the
                            recyclable packaging and fast delivery. Thank you for making dairy-free taste this good!</p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Akash K</h2>
                        <p class="text-gray-500">CTO</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- offer -->
    <section class="bg-violet-500 text-white py-20 px-5 lg:px-0">
        <div class="max-w-sm md:max-w-7xl mx-auto relative">
            <div class="absolute md:left-40 top-0">
                <img :src="dots" alt="dots" class="w-18 md:w-auto">
            </div>
            <div class="absolute right-0 md:right-40 bottom-0">
                <img :src="lines" alt="dots" class="w-14 md:w-auto">
            </div>
            <div class="text-center">
                <h1 class="text-5xl md:text-7xl font-bold pb-3">Limited<br /> Time Offer!</h1>
                <p class="text-sm md:text-base pb-6">Get <span class="text-yellow-400">20% Off</span> All Vegan Ice
                    Creams!</p>
                <RouterLink to="/products"
                    class="bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full inline-flex items-center gap-0.5 px-8 py-3">
                    Get This Deal
                    <Icon icon="mdi:arrow-right-thin" width="24" />
                </RouterLink>
                <p class="md:text-sm text-xs text-neutral-100 pt-3">Use code: <span
                        class="text-yellow-400">VEGAN20</span> at
                    checkout.</p>
            </div>
        </div>
    </section>

</template>
