<script setup>
import axios from 'axios'
import { ref } from 'vue'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})


const ChampionsName = ref('')
const Championsid = ref('')
const ChampionsKey = ref('')
const ChampionsTitle = ref('')
const ChampionDesc = ref('')
const ChampionsTags = ref('')
const ChampionsStats = ref('')
const ChampionIcon = ref('')



const addChampions = async () => {
  const { data } = await api.post('/api/Champions', {
    icon: ChampionIcon.value,
    id: Championsid.value,
    key: ChampionsKey.value,
    name: ChampionsName.value,
    title: ChampionsTitle.value,
    tags: ChampionsTags.value,
    stats: ChampionsStats.value,
    description: ChampionDesc.value,
  })
}
</script>

<template>
  <form class="login-form" @submit.prevent="addChampion">
    <input v-model="ChampionsName" type="text" placeholder="Champion Name" />
    <input v-model="ChampionIcon" type="text" placeholder="Icon URL" />
    <input v-model="Championsid" type="text" placeholder="ID" />
    <input v-model="ChampionsKey" type="text" placeholder="Key" />
    <input v-model="ChampionsTitle" type="text" placeholder="Title" />
    <input v-model="ChampionsTags" type="text" placeholder="Tags" />
    <input v-model="ChampionsStats" type="text" placeholder="Stats" />
    <input v-model="ChampionDesc" type="text" placeholder="Description" />
    <button type="submit" class="bg-green-500 px-4 py-2">Submit</button>

  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-8 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;

  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }

  & button {
    @apply rounded-md px-4 py-2 text-white text-lg cursor-pointer;
  }
}
</style>