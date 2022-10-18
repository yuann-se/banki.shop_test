<template>
    <router-view v-slot="{ Component }">
        <transition name="modal">
            <component :is="Component" />
        </transition>
    </router-view>

    <AppHeader />
    <CardsList />
    <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import CardsList from '../components/CardsList.vue';
import AppFooter from '../components/AppFooter.vue';

</script>
<style scoped>
.modal-enter-active,
.modal-leave-active {
    opacity: 1;
    transition: opacity .2s ease;
}

.modal-enter-active:deep(.content),
.modal-leave-active:deep(.content) {
    transform: none;
    transition: transform .4s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from:deep(.content),
.modal-leave-to:deep(.content) {
    transform: translateX(-50px);
}
</style>