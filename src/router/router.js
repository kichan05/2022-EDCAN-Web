import { createWebHistory, createRouter } from "vue-router"

import MainPage from "./../views/MainPage.vue"
import PortfolioPage from "./../views/PortfolioPage.vue"

const routes = [
    {
        path : "/",
        component : MainPage
    },
    {
        path : "/PR",
        component : PortfolioPage
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router