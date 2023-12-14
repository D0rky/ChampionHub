<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI';

const { fetchChampion, currentChampion } = useAPI()

const route = useRoute()

onMounted(async () => {
    await fetchChampion(route.params.id)
})

onUnmounted(() => {
    currentChampion.value = null
})
</script>

<template>
    <main class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700 py-8 text-white">
        <div v-if="currentChampion" class="flex flex-col items-center gap-6">
            <!-- Character's Image -->
            <img :src="currentChampion.icon" :alt="currentChampion.name" class="h-40 w-40 rounded-full shadow-lg" />

            <div class="text-center">
                <!-- Character's Title, ID, and Tags -->
                <h1 class="text-4xl font-bold">{{ currentChampion.value.title }}</h1>
                <p class="text-white-600 text-xl">ID: {{ currentChampion.id }}</p>
                <p class="text-white-600 text-xl">Tag: {{ currentChampion.tags }}</p>
            </div>

            <!-- Character's Stats and Description -->
            <div class="grid grid-cols-2 gap-4 rounded-lg bg-white p-4 shadow-lg">
                <div>
                    <p class="text-lg text-gray-600">Stats: {{ currentChampion.stats }}</p>
                </div>
                <div>
                    <p class="text-lg text-gray-600">Description: {{ currentChampion.description }}</p>
                </div>
            </div>

        </div>
    </main>
</template>