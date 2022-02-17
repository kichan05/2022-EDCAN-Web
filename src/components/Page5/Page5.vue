<template>
<div class="main-page-page page5">
    <div class="content">
        <h3 class="page-title">Portfolio</h3>
        
        <div class="portfolio-wrap">
            <PortfolioItem
                v-for="i in 2" :key="i"
                :PortfolioData="portfolioList[i]"
                />
        </div>

        <button
            @click="$router.push('PR')"
            class="goto-portfolio-all">전체보기</button>
    </div>
</div>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue"

import portfolioList from "./../../assets/PortfolioList.js"

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    
}

shuffle(portfolioList)

export default {
    name : "Page5",
    data(){return{
        portfolioList
    }},
    components : {
        PortfolioItem
    }
}
</script>

<style scoped>
.page5 {
    display: grid;
    grid-template-columns: 1fr;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.page-title {
    text-align: center;
}

.portfolio-wrap {
    margin : 82px 0;

    /* display: grid;
    grid-template-columns: 1fr 1fr; */

    display: flex;
    gap : 16px;
}

.portfolio-wrap .portfolio-item {
    width : 100%;
}

.goto-portfolio-all {
    font-size: 25px;
    font-weight: 400;
    
    margin : 0 auto;
    padding : 16px 26px;

    border: 2px solid #000000;
    border-radius: 100px;

    background-color: white;
    
    transition: transform 100ms;
}

.goto-portfolio-all:hover {
    transform: scale(1.025);
}

.goto-portfolio-all:active {
    transform: scale(0.9);
}
</style>