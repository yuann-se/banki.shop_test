import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "../views/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePageVue,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;