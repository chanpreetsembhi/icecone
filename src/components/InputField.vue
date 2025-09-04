<script setup lang="ts">
defineProps<{
    name: string
    title: string
    type?: "text" | "number" | "email" | "password";
    placeholder?: string
    modelValue: string
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void
}>();
</script>
<template>
    <div>
        <label :for="name" class="block text-sm/6 font-semibold text-gray-900 dark:text-white">
            {{ title }}
        </label>
        <div class="mt-2.5">
            <input :id="name" :type="type ?? 'text'" :name="name" :value="modelValue"
                @input="emit('update:modelValue', ($event.target as any)?.value)" :placeholder="placeholder"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-violet-500" />
        </div>
    </div>
</template>