import { createApp } from 'vue'
import App from './App.vue'

import Router from "./router/router.js"
import Store from "./store.js"
import GlobalMethods from "./globalMethods"

createApp(App)
    .use(Router)
    .use(Store)
    .use(GlobalMethods)
    .mount('#app')