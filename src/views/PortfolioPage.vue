<template>
<div class="page">
    <div class="content">
        <h3>Portfolio</h3>
        <div class="unit-choice-buttons">
            <button>All</button>
            <button>Atelier</button>
            <button>Pixel</button>
        </div>
        <div class="portfolio-list">
            <PortfolioItem
                v-for="i, n in PortfolioDataList" :PortfolioData="i" :key="n"/>
        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import PortfolioItem from "./../components/Page5/PortfolioItem.vue"
import Footer from "./../components/Footer.vue"

import PortfolioDataList from "./../assets/PortfolioList.js"

export default {
    name : "PortfolioPage",
    data(){return{
        PortfolioDataList
    }},
    components : {
        PortfolioItem,
        Footer,
    }
}
</script>

<style scoped>
.content {
    padding : 120px 12px;
}

h3 {
    font-size: 28px;
    font-weight: 500;
    line-height: 33px;
    text-align: center;
}

.unit-choice-buttons {
    padding : 50px;

    display: flex;
    justify-content: center;
    gap : 25px;
}

.unit-choice-buttons button {
    width : 120px;
    height : 44px;

    font-family: "Work Sans";
    font-size: 25px;
    font-weight: 400;

    background: white;
    border: 2px solid black;
    border-radius: 30px;
}

.unit-choice-buttons button:active {
    transform: scale(0.975);
    opacity: 0.5;
}

.portfolio-list {
    display : grid;
    grid-template-columns: repeat(2, 1fr);
    gap : 20px;
}
</style>