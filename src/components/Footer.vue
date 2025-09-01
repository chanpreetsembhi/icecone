<script setup lang="ts">
import Logo from "@/assets/logo.png";
import { Icon } from "@iconify/vue";
</script>
<template>
    <footer class="bg-white border-t border-gray-200 text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 gap-2">
                <div class="bg-violet-200 rounded-full size-10 p-2">
                    <img :src="Logo" alt="logo" />
                </div>
                <div class="text-2xl font-bold">Icecone</div>
            </a>
            <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                2025 Icecone —
                <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer"
                    target="_blank">@knyttneve</a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://www.facebook.com/" target="_blank" class="text-gray-500">
                    <Icon icon="mdi:facebook" width="20" />
                </a>
                <a href="https://www.gmail.com/" target="_blank" class="ml-3 text-gray-500">
                    <Icon icon="mdi:gmail" width="20" />
                </a>
                <a href="http://instagram.com/" target="_blank" class="ml-3 text-gray-500">
                    <Icon icon="mdi:instagram" width="20" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" class="ml-3 text-gray-500">
                    <Icon icon="mdi:linkedin" width="20" />
                </a>
            </span>
        </div>
    </footer>
</template>
