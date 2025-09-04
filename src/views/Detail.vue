<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Product from "@/api/data.json";
import { Icon } from '@iconify/vue';

const route = useRoute();
const product = ref<any>(null);

onMounted(() => {
    const id = parseInt(route.params.id as string);
    product.value = Product.find((item: any) => item.id === id);
})
</script>
<template>
    <section v-if="product" class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-5 md:py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <div
                    class="lg:w-1/2 bg-violet-100 lg:h-auto w-full rounded-xl grid place-content-center aspect-square md:aspect-auto">
                    <img :src="product.img_url" class="md:h-80 mx-auto">
                </div>
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm text-gray-500 tracking-widest">{{ product.category }}</h2>
                    <h1 class="text-gray-900 text-3xl font-bold mb-3">{{ product.name }}</h1>
                    <div class="flex mb-4">
                        <span class="flex items-center">
                            <Icon icon="mdi:star" width="20" class="text-yellow-500" />
                            <Icon icon="mdi:star" width="20" class="text-yellow-500" />
                            <Icon icon="mdi:star" width="20" class="text-yellow-500" />
                            <Icon icon="mdi:star" width="20" class="text-yellow-500" />
                            <Icon icon="mdi:star-outline" width="20" />
                            <span class="text-gray-600 text-sm ml-3">4 Reviews</span>
                        </span>
                    </div>
                    <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
                        brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle
                        pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <div class="flex border-t border-neutral-200 mt-6 py-4">
                        <span class="title-font font-medium text-2xl text-gray-900">₹{{ product.price }}</span>
                        <button
                            class="flex ml-auto text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded-md">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else class="text-center py-20">
        <p class="text-gray-600 text-xl">Product not found.</p>
    </section>
</template>