<script setup>
import MainCardsSingle from './MainCardsSingle.vue';

</script>



<template>
    <div class="sub-wrapper">
        <MainCardsSingle v-for="n in 20" />
    </div>
</template>




<style scoped lang="postcss">
.sub-wrapper {
    @apply grid grid-cols-1 gap-4;

    @screen md {
        grid-template-columns: repeat(2, 1fr);
    }

    @screen lg {
        grid-template-columns: repeat(3, 1fr);
    }

    @screen xl {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>