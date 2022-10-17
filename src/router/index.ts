import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "../views/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'Главная',
        component: HomePageVue,
    },
    {
        path: '/catalog',
        name: 'Каталог',
        component: HomePageVue,
    },
    {
        path: '/delivery',
        name: 'Доставка',
        component: HomePageVue,
    },
    {
        path: '/payment',
        name: 'Оплата',
        component: HomePageVue,
    },
    {
        path: '/contacts',
        name: 'Контакты',
        component: HomePageVue,
    },
    {
        path: '/about_us',
        name: 'О компании',
        component: HomePageVue,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;