<template>
    <footer class="footer">
        <div class="container footer__container">
            <NavBar />
            <div class="footer__contacts">
                <a class="contact" href="tel:123-456-7890">
                    <PhoneIcon />
                    <span>+7 (812) 555-55-55</span>
                </a>
                <address class="contact">
                    <LocationIcon />
                    <span>г. Санкт-Петербург, ул. Ефимова, 3</span>
                </address>
            </div>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import NavBar from './NavBar.vue';
import PhoneIcon from './icons/PhoneIcon.vue';
import LocationIcon from './icons/LocationIcon.vue';

</script>
<style scoped>
.footer {
    position: fixed;
    height: 97px;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--bg-dark);
}

.footer:deep(.navlist__item) {
    color: var(--black55);
}

.footer__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer__contacts {
    width: 50%;
    max-width: 496px;
    display: flex;
    justify-content: space-between;

}

.contact {
    display: flex;
    align-items: center;
}

.contact:deep(svg) {
    margin-right: 8px;
}

.contact span {
    color: var(--black55);
    font-style: initial;
}

.contact:last-child {
    margin-left: 15px;
}
</style>