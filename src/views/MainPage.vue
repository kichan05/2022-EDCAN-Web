<template>
<main class="page">
    <Header/>
    <Page4/>
    <Page5/>

    <Footer/>
</main>
</template>

<script>
import Page4 from "../components/Page4/Page4.vue";
import Page5 from "../components/Page5/Page5.vue";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    name : "MainPage",
    components : {
        Page4,
        Page5,

        Header,
        Footer,
    }
}
</script>

<style>
.main-page-page {
    width : 100%;
    /* min-height: 100vh; */
    min-height: 70vh;
}

.page4 {
    margin-top : 80px;
}

.main-page-page .page-title {
    font-size: 32px;
    font-weight: 500;
}
</style>