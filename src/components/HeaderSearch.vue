<template >
    <div class="search">
        <form class="search__form" @submit.prevent>
            <input type="text" class="search__input" :placeholder="placeholder" :value.trim="searchQuery"
                @input="setSearchQuery">
            <button class="search__btn basic-btn">Найти</button>
        </form>
    </div>
</template>
<script lang="ts" setup>
import store from '../store';
import { computed, WritableComputedRef } from 'vue';

const placeholder = window.innerWidth >= 500 ? 'Поиск по названию картины' : 'Поиск'

const searchQuery = computed(() => { return store.state.searchQuery })

const setSearchQuery = (e: Event) => {
    const target = e.target as HTMLInputElement
    store.dispatch('setSearchQuery', target.value)
}

// const searchQuery = computed({
//     get() {
//         return store.state.searchQuery
//     },
//     set(value) {
//         store.dispatch('setSearchQuery', value)
//     },
// })

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
    opacity: 1;
}

@media(max-width: 1000px) {
    .search {
        width: 70%;
        max-width: none;
    }
}

@media(max-width: 700px) {
    .search {
        width: 80%;
    }
}

@media(max-width: 500px) {
    .header__container {
        padding: 20px 15px;
    }

    .search__btn {
        width: 100px;
        font-size: 12px;
    }

    .search {
        width: 100%;
        margin-right: 15px;
    }
}
</style>