<template>
<main class="page">
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>

    <Footer/>
</main>
</template>

<script>
import Page1 from "../components/Page1/Page1.vue";
import Page2 from "../components/Page2/Page2.vue";
import Page3 from "../components/Page3/Page3.vue";
import Page4 from "../components/Page4/Page4.vue";
import Page5 from "../components/Page5/Page5.vue";
import Page6 from "../components/Page6/Page6.vue";

import Footer from "../components/Footer.vue";

export default {
    name : "MainPage",
    components : {
        Page1,
        Page2,
        Page3,
        Page4,
        Page5,
        Page6,

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

.page1 {
    /* margin-top : 80px; */
}

.main-page-page .page-title {
    font-size: 32px;
    font-weight: 500;
}
</style>