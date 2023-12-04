<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI';

const { fetchChampion, currentChampion } = useAPI()

const route = useRoute()

const champion = ref('')

onMounted(async () => {
  await fetchChampion(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
  currentChampion.value = null
})
</script>

<template>
  <main class="min-h-screen bg-gradient-to-b from-amber-900 to-yellow-300 font-poppins">
    <div v-if="currentChampion" class="flex flex-col items-center justify-center gap-6">
      <!-- Replace this image source with your Champion image -->
      <img class="p-8 h-64 w-64" :src="currentChampion.image" :alt="currentChampion.name" />
      <h1 class="text-white-800 text-6xl font-bold">{{ currentChampion.name }}</h1>
      <!-- Display other details of the Champion -->
      <!-- For example, you can add other properties like title, stats, etc. -->
      <p>{{ currentChampion.title }}</p>
      <p>{{ currentChampion.stats }}</p>
      <p>{{ currentChampion.description }}</p>
    </div>
  </main>
</template>
