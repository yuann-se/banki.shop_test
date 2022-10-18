<template >
    <nav class="nav">
        <ul class="navlist">
            <li class="navlist__item">
                <router-link to="/catalog">Каталог</router-link>
            </li>
            <li class="navlist__item">
                <router-link to="/delivery">Доставка</router-link>
            </li>
            <li class="navlist__item">
                <router-link to="/payment">Оплата</router-link>
            </li>
            <li class="navlist__item">
                <router-link to="/contacts">Контакты</router-link>
            </li>
            <li class="navlist__item">
                <router-link to="/about_us">О компании</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav {
    width: 50%;
    max-width: 542px;
}

.navlist {
    display: flex;
    width: 100%;
    margin-left: 95px;
    justify-content: space-between;
}

.navlist__item:not(:last-child) {
    margin-right: 10px;
}

.navlist__item {
    position: relative;
    font-size: 14px;
}

.navlist__item a {
    outline: 1px solid transparent;
    outline-offset: 3px;
    transition: outline .2s ease;
}

.navlist__item::before {
    content: '';
    position: absolute;
    width: 100%;
    max-width: 0;
    height: 1px;
    bottom: -3px;
    background-color: var(--black);
    transition: max-width .2s ease;
}

.navlist__item a:focus-visible {
    outline: 1px solid var(--black);
}

.navlist__item:hover::before {
    max-width: 100%;
}

@media(max-width: 1300px) {
    .navlist {
        margin-left: 0;
    }
}
</style>