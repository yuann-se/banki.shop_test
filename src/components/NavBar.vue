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
    justify-content: space-between;
}

.navlist__item:not(:last-child) {
    margin-right: 10px;
}

.navlist__item {
    font-size: 14px;
}
</style>