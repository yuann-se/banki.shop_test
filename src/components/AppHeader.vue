<template>
    <header class="header">
        <div class="container header__container">
            <NavBar :class="{isOpen: isSideMenuOpen}" />
            <HeaderSearch />
            <BurgerIcon class="burger-menu" :class="{open: isSideMenuOpen}" @click="openSideMenu" />
        </div>
    </header>
</template>

<script lang="ts" setup>
import NavBar from "./NavBar.vue";
import HeaderSearch from "./HeaderSearch.vue";
import BurgerIcon from "./icons/BurgerIcon.vue";
import { ref } from "vue";

const isSideMenuOpen = ref(false)

const openSideMenu = () => {
    isSideMenuOpen.value = !isSideMenuOpen.value
}

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

.burger-menu {
    display: none;
}

@media(max-width: 1000px) {

    .header__container {
        position: relative;
        padding: 20px 40px;
    }

    .burger-menu {
        position: relative;
        z-index: 300;
        display: inline;
        transform: scale(.7);
    }

    .header:deep(.nav) {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 200;
        width: 60%;
        background-color: var(--bg-dark);
        box-shadow: 0 0 20px rgb(0 0 0 / 25%);
        transform: translateX(105%);
        transition: transform .5s ease;
    }

    .header:deep(.nav.isOpen) {
        transform: none;
    }

    .header:deep(.navlist) {
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
    }

    .header:deep(.navlist__item) {
        font-size: 20px;
        margin-bottom: 20px;
    }
}

@media(max-width: 700px) {
    .header__container {
        padding: 20px 15px;
    }
}

@media(max-width: 500px) {

    .header {
        height: fit-content;
    }

    .header__container {
        padding: 20px 15px;
        flex-direction: column-reverse;
        align-items: flex-end;
    }

    .burger-menu {
        transform: scale(.6);
    }

    .header:deep(.nav) {
        width: 100%;
    }
}
</style>