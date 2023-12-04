<script setup>
import { defineProps } from 'vue'

const selectCard = () => {
    console.log(`${props.champion.name} selected`)
}

const props = defineProps({
    champion: {
        type: Object,
        required: true,
        default: () => {
            return {
                id: '1',
                key: 1,
                name: 'Champion Name',
                title: 'Title',
                tags: 'Support',
                stats: 0,
                description: 'Description',
            }
        },
    },
})
</script>

<template>
    <RouterLink v-if="props.champion.id" :to="`/api/champion/${props.champion.id}`">
        <div class="card" @click="selectCard">
            <div class="card-image">
                <!-- Replace this with your champion image -->
                <img :src="props.champion.image" alt="" srcset="" />
            </div>
            <div class="card-details">
                <p class="card-details-name font-poppins">{{ props.champion.name }}</p>
                <p class="card-details-name">{{ props.champion.title }}</p>
                <p class="card-details-name">{{ props.champion.description }}</p>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped lang="postcss">
.card {
    @apply cursor-pointer overflow-hidden rounded-md bg-slate-600 p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-900;

    &-image {
        img {
            @apply mx-auto rounded-full object-contain;
        }
    }

    &-details {
        @apply flex flex-col gap-2 pt-6 text-center;

        &-name {
            @apply text-3xl font-thin tracking-wider text-slate-200;
        }

        &-job {
            @apply -mt-2 text-xs font-bold text-yellow-700;
        }
    }
}
</style>
