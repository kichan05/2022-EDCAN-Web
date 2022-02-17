<template>
<div class="main-page-page page5">
    <div class="content">
        <h3 class="page-title">Portfolio</h3>
        
        <div class="portfolio-wrap">
            <PortfolioItem
                v-for="i, n in portfolioList" :key="n"
                :PortfolioData="i"
                />
        </div>

        <button class="goto-portfolio-all">전체보기</button>
    </div>
</div>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue"

import portfolioList from "./../../assets/PortfolioList.js"

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
    height : 270px;

    margin : 82px 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap : 20px;
}

.goto-portfolio-all {
    font-size: 25px;
    font-weight: 400;
    
    margin : 0 auto;
    padding : 16px 26px;

    border: 2px solid #000000;
    border-radius: 100px;

    background-color: white;
}
</style>