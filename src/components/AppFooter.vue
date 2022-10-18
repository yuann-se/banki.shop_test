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
                    <span>г.&nbsp;Санкт-Петербург, ул.&nbsp;Ефимова,&nbsp;3</span>
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
    height: 97px;
    margin-top: auto;
    background-color: var(--bg-dark);
}

.footer:deep(.navlist__item) {
    color: var(--black55);
}

.footer:deep(.navlist__item::before) {
    background-color: var(--black55);
}

.footer__container {
    height: 100%;
    padding-right: 15px;
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

@media(max-width: 1300px) {
    .footer__container {
        flex-direction: column;
        justify-content: center;
        padding-right: 40px;
    }

    .footer:deep(.nav),
    .footer__contacts {
        width: 60%;
        max-width: none;
        justify-content: space-around;
    }

    .footer__contacts {
        margin-top: 20px;
    }
}

@media(max-width: 1000px) {

    .footer:deep(.nav),
    .footer__contacts {
        width: 80%;
    }
}

@media(max-width: 700px) {

    .footer {
        height: fit-content;
    }

    .footer__container {
        flex-direction: row;
        padding: 20px 15px;
    }

    .footer:deep(.navlist) {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer:deep(.navlist__item) {
        margin-bottom: 10px;
    }

    .footer__contacts {
        flex-direction: column;
        margin-top: 0;
    }

    .contact:last-child {
        margin-left: 0;
        margin-top: 20px;
    }

    .footer:deep(.nav) {
        width: 40%;
    }

    .footer__contacts {
        width: 60%;
    }
}
</style>