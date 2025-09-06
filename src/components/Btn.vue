<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = withDefaults(defineProps<{
    to: string
    label: string
    varient: 'primary' | 'secondary' | 'white';
    icon?: string
    size?: 'small' | 'default' | 'large'
}>(), {
    size: 'default'
});
</script>
<template>
    <RouterLink :to="props.to"
        class="rounded-full border-0 font-semibold cursor-pointer transition-all ease-in-out duration-200" :class="[
            icon ? 'inline-flex items-center gap-1' : '',
            {
                'text-base px-6 py-3': props.size === 'large',
                'text-sm px-6 py-3': props.size === 'default',
            },
            {
                'bg-violet-600 hover:bg-violet-700 text-white': props.varient === 'primary',
                'bg-pink-500 hover:bg-pink-600 text-white': props.varient === 'secondary',
                'bg-white text-violet-600': props.varient === 'white'
            }]">
        {{ label }}
        <Icon v-if="props.icon" :icon="props.icon" :class="{
            'size-6': props.size === 'large',
            'size-5': props.size === 'default'
        }" />
    </RouterLink>
</template>