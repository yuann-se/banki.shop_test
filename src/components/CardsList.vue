<template >
    <main class="cardslist">
        <div class="container cardslist__container">
            <h2 class="section-title">
                Картины эпохи Возрождения
            </h2>
            <transition-group name="cards" tag="div" class="cards-wrapper">
                <CardsListItem v-for="card in cards" :card="card" :key="card.title" />
            </transition-group>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import store from '../store';
import CardsListItem from './CardsListItem.vue';
const cards = computed(() => { return store.getters.filteredCards })

</script>

<style scoped>
.cardslist__container {
    padding-top: 45px;
    padding-bottom: 45px;
}

.section-title {
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 700;
}

.cards-wrapper {
    display: flex;
}


.cards-enter-active,
.cards-leave-active {
    transition: opacity .3s ease;
}

.cards-enter-from,
.cards-leave-to {
    opacity: 0;
}
</style>