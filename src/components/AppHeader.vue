<template>
    <header class="header">
        <div class="container header__container">
            <NavBar />
            <HeaderSearch />
        </div>
    </header>
</template>

<script lang="ts" setup>
import NavBar from "./NavBar.vue";
import HeaderSearch from "./HeaderSearch.vue";

</script>

<style scoped>
.header {
    height: 97px;
    border-bottom: 1px solid var(--border);
}

.header__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>