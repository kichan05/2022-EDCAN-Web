import { createWebHistory, createRouter } from "vue-router"

import MainPage from "./../views/MainPage.vue"
import PortfolioPage from "./../views/PortfolioPage.vue"
import Admim from "./../views/Admin.vue"
import AdmimLogin from "./../views/AdminLogin.vue"
import UnitPage from "./../views/UnitPage.vue"
import EasterEggPage from "./../views/EasterEggPage.vue"

import store from "./../store.js"

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
        path : "/unit",
        component : UnitPage
    },
    {
        path : "/easterEgg",
        component : EasterEggPage
    },
    {
        path : "/login",
        component : AdmimLogin
    },
    {
        path : "/console",
        component : Admim,
        beforeEnter: () => {
            if(!store.state.isAdmin) return "/login"
        }
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router