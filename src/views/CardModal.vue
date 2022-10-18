<template>
    <div class="modal" v-disable-scroll @click="handleClose">
        <div class="container modal__container content" @click.stop>

            <div class="modal__slider">
                <swiper :modules="[Navigation, Pagination, Autoplay]" :slides-per-view="1" :space-between="50"
                    :speed="1500" :loop="true" :pagination="{ clickable: true }" :autoplay="{delay: 2000}">
                    <swiper-slide v-for="(item, ind) in painting.images" :key="ind">
                        <img class="img" :src="item" :alt="painting.title">
                    </swiper-slide>
                </swiper>
            </div>

            <p class="modal__price" v-if="painting.price">
                <span>Название: </span>
                <span>{{painting.title}}</span>
            </p>
            <p class="modal__price" v-if="painting.price">
                <span>Художник: </span>
                <span>{{painting.author}}</span>
            </p>
            <p class="modal__price" v-if="painting.price">
                <span>Стоимость: </span>
                <span>{{painting.price}}</span>
            </p>

            <div class="modal__descr">
                <p v-for="par in descrParagraphs">{{par}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import store from '../store';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import router from '../router';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const route = useRoute()
const paintingID = route.params.painting

const painting = store.state.cards.filter((card) => { return card.id === paintingID })[0]

const descrParagraphs = painting.descr.split(';;')

const handleClose = () => {
    router.push('/')
}

</script>
<style>
.modal {
    position: fixed;
    inset: 0;
    width: 100vw;
    z-index: 9999;
    padding: 50px;
    background-color: rgba(0, 0, 0, .6);

    display: flex;
    justify-content: center;
    overflow-y: scroll;
}

.container.modal__container {
    max-width: 1216px;
    width: 80%;
    padding: 40px;
    height: fit-content;
    background-color: var(--bg);
}

.modal__slider {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin-bottom: 20px;
}

.img {
    min-width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}

.modal__price span:last-child {
    text-align: right;
    font-size: 16px;
    font-weight: 700;
}

.modal__price {
    margin-bottom: 10px;
}

.modal__descr {
    margin-top: 20px;
}

.modal__descr p {
    line-height: 1.5;
}



.swiper-slide {
    display: flex;
    justify-content: center;
}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    top: 380px;
}

.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 15px;
    transform: scale(1.5);
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--bg);
    opacity: 1;
}

.swiper-pagination-bullet {
    background: var(--bg);
    opacity: .5;
}


@media(max-width: 700px) {
    .container.modal__container {
        width: 100%;
        padding: 30px;
    }
}

@media(max-width: 500px) {

    .modal {
        padding: 30px;
    }

    .container.modal__container {
        width: 100%;
        padding: 15px;
    }

    .modal__slider {
        height: 300px;
    }

    .modal__descr p {
        font-size: 12px;
    }

    .modal__price span:last-child {
        font-size: 14px;
        font-weight: 700;
    }

    .swiper-horizontal>.swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
        top: 280px;
    }
}
</style>