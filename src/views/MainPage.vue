<template>
<main class="page">
    <button class="goto-jiwon" @click="$gotoJiwon">지원하기</button>

    <Page1/>
    <Page2/>
    <Page3/>
    <UnitPage/>
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

import UnitPage from "./UnitPage.vue"

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

        UnitPage,

        Footer,
    },
    methods: {
        // gotoJiwon(){
            
        // }
    },
    mounted() {
        window.addEventListener("scroll", ()=>{
            const page6 = document.querySelector(".page6")
            if(page6.getBoundingClientRect().top < 500){
                document.querySelector(".goto-jiwon")
                .classList.add("hidden")
            }
            else{
                document.querySelector(".goto-jiwon")
                .classList.remove("hidden")
            }
        })
    },
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

.goto-jiwon {
    font-size: 24px;
    font-weight: 500;

    background-color: #fff;

    padding : 12px 40px;

    border : 0px;
    border-radius: 30px;

    box-shadow: 0px 0px 10px #a2a2a269;

    position: fixed;
    bottom : 20px;
    right : 20px;
    z-index: 10;

    transition: 250ms;
}

.goto-jiwon:hover {
    transform: scale(1.025);
}

.goto-jiwon:active {
    transform: scale(0.985);
}

.goto-jiwon.hidden {
    opacity: 0;
}
</style>