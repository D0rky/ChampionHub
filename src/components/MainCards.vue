<script setup>
import { ref, computed } from "vue";
import useAPI from '@/composables/useAPI'
import MainCardsSingle from '@/components/MainCardsSingle.vue'
import MainSearch from '@/components/MainSearch.vue'

const { Champions } = useAPI()
const search = ref('');

const filteredList = computed(() => {
    return Champions.value.filter(Champions =>
        Champions.name.toLowerCase().includes(search.value.toLowerCase())
    );
});


</script>

<template>
    <input type="text" placeholder="Search..." class="search" v-model="search" />

    <div class="sub-wrapper" v-if="Champions">

        <Suspense>

            <MainCardsSingle v-for="Champion in filteredList" :key="Champion.id" :Champion="Champion" />
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<style scoped lang="postcss">
.search {
    @apply px-3 py-4 placeholder-slate-400 text-slate-700 rounded-md border-0 outline-none focus:ring focus:ring-yellow-500;
}

.sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>