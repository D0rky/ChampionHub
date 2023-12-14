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
    <main class="min-h-screen bg-gray-500 py-8">
        <div v-if="currentChampion" class="container mx-auto max-w-3xl">
            <div class="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg p-8 shadow-md">
                <!-- Character's Image -->
                <img :src="currentChampion.icon" :alt="currentChampion.name" class="h-40 w-40 rounded-full shadow-lg" />

                <div class="text-center md:text-left">
                    <!-- Character's Title, ID, and Tags -->
                    <h1 class="text-4xl font-bold">{{ currentChampion.name }}</h1>
                    <p class="text-gray-600 text-lg">ID: {{ currentChampion.title }}</p>
                    <p class="text-gray-600 text-lg">Tag: {{ currentChampion.tags }}</p>
                </div>
            </div>

            <!-- Character's Stats and Description -->
            <div class="bg-white mt-8 p-6 rounded-lg shadow-md">
                <div class="mb-6">
                    <h2 class="text-2xl font-bold mb-2">Stats</h2>
                    <p class="text-gray-700">{{ currentChampion.stats }}</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-2">Description</h2>
                    <p class="text-gray-700">{{ currentChampion.description }}</p>
                </div>
            </div>
        </div>
    </main>
</template>