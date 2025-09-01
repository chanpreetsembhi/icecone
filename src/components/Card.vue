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
    <RouterLink :to="`/product/${id}`" class="bg-white p-4 shadow-sm rounded-2xl border border-neutral-100">
        <div class="bg-violet-100/60 h-56 rounded-lg grid place-content-center">
            <img :alt="title" class="mx-auto" :src="img">
        </div>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ category }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{ title }}</h2>
            <p class="mt-1">${{ price }}</p>
        </div>
    </RouterLink>
</template>