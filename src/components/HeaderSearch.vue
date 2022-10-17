<template >
    <div class="search">
        <form class="search__form" @submit!.prevent>
            <input type="text" class="search__input" placeholder="Поиск по названию картины" v-model.trim="searchQuery">
            <button class="search__btn basic-btn">Найти</button>
        </form>
    </div>
</template>
<script lang="ts" setup>
import store from '../store';
import { computed, WritableComputedRef } from 'vue';


const searchQuery: WritableComputedRef<string> = computed<string>({
    get(): string {
        return store.state.searchQuery
    },
    set(value: string): void {
        store.dispatch('setSearchQuery', value)
    },
})

</script>

<style scoped>
.search {
    width: 50%;
    max-width: 416px;
    height: 48px;
}

.search__form {
    display: flex;
}

.search__input {
    flex-grow: 1;
    padding: 13px 15px;
    background-color: transparent;
    border: 1px solid var(--border);
    border-right: none;
}

.search__input::placeholder {
    color: #9F9F9F;
}
</style>