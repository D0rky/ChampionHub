<script setup>
  import { onMounted } from 'vue'

  import MainCards from '@/components/MainCards.vue'
  import MainPagination from '@/components/MainPagination.vue'

  import useAPI from '@/composables/useAPI'

  const { getChampions, loading } = useAPI()

  onMounted(async () => {
    await getChampions()
  })
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div v-else class="wrapper">
    <!--<MainSearch />-->
    <MainCards />
    <MainPagination />
  </div>
</template>

<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
  }
</style>