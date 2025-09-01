<script setup lang="ts">
import Product from "@/api/data.json";
import Card from "@/components/Card.vue";
import Banner from "@/assets/slider-1.jpg";
</script>
<template>
    <section class="relative h-60 md:h-96">
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center px-4">
            <h1 class="text-4xl md:text-6xl font-bold text-center pb-3">
                Unforgettably Delicious.
            </h1>
            <p class="text-sm md:text-base font-normal text-neutral-200 pb-4">Made with real ingredients, crafted to
                chill your
                cravings.</p>
            <a href="#"
                class="inline-flex items-center gap-1 bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm px-8 py-3 rounded-full">
                Shop Now
            </a>
        </div>
        <div class="bg-black/30 backdrop-blur-xs absolute top-0 size-full"></div>
        <img :src="Banner" alt="banner" class="object-cover object-top h-60 md:h-96 w-full">
    </section>
    <section class="max-w-sm md:max-w-7xl mx-auto py-10 px-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card v-for="(item, index) in Product" :key="index" :id="item.id" :img="item.img_url" :title="item.name"
                :category="item.category" :price="item.price" />
        </div>
    </section>
</template>
