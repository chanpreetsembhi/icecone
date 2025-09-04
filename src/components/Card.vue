<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
    id: number,
    img: string,
    title: string,
    category: string,
    price: number
}>();
</script>
<template>
    <RouterLink :to="`/product/${id}`" class="bg-white p-4 shadow-sm rounded-2xl border border-neutral-100 block">
        <div class="bg-violet-100/60 h-56 rounded-lg grid place-content-center p-6 overflow-hidden">
            <img :alt="title" :src="img" class="mx-auto object-contain max-h-48 max-w-full">
        </div>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest mb-1">{{ category }}</h3>
            <h2 class="text-gray-900 text-lg font-medium line-clamp-2">{{ title }}</h2>
            <p class="mt-1">${{ price }}</p>
        </div>
    </RouterLink>
</template>