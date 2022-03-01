import { createWebHistory, createRouter } from "vue-router"

import MainPage from "./../views/MainPage.vue"
import PortfolioPage from "./../views/PortfolioPage.vue"
import Admim from "./../views/Admin.vue"

const routes = [
    {
        path : "/",
        component : MainPage
    },
    {
        path : "/PR",
        component : PortfolioPage
    },
    {
        path : "/console",
        component : Admim
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router