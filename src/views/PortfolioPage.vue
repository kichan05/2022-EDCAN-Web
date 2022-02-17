<template>
<div class="portfolio-page page">
    <div class="content">
        <h3 class="title">Portfolio</h3>

        <div class="unit-button-wrap">
            <button
                @click="choiceUnit = 0"
                class="choice-unit" :class="{'now-choice' : choiceUnit == 0}">All</button>
            <button
                @click="choiceUnit = 1"
                class="choice-unit" :class="{'now-choice' : choiceUnit == 1}">Atelier</button>
            <button
                @click="choiceUnit = 2"
                class="choice-unit" :class="{'now-choice' : choiceUnit == 2}">Pixel</button>
        </div>

        <ul class="portfolio-list">
            <PortfolioItem
                v-for="i, n in portfolioListFilter" :key="n"
                :PortfolioData="i"
                />
        </ul>
    </div>
</div>
</template>

<script>
import PortfolioItem from "./../components/Page5/PortfolioItem.vue"
import portfolioList from "../assets/PortfolioList.js"
// let portfolioListFilter = portfolioList

export default {
    name : "Portfolio page",
    data(){return{
        choiceUnit : 0,
        portfolioListFilter : portfolioList
    }},
    components : {
        PortfolioItem
    },
    watch : {
        choiceUnit(it){
            this.portfolioListFilter = []
            portfolioList.forEach(i => {
                if(it == 0)
                    this.portfolioListFilter.push(i)
                else if(it == 1 && i.unit == "Atelier")
                    this.portfolioListFilter.push(i)
                else if(it == 2 && i.unit == "Pixel")
                    this.portfolioListFilter.push(i)
            })
        }
    }
}
</script>

<style scope>
.content {
    width : 100%;
    min-height : 100vh;

    padding : 100px;

    display: grid;
    grid-template-rows: auto auto 1fr;
    gap : 50px;
}

.title {
    font-size: 32px;
    font-weight: 500;

    text-align: center;
}

.unit-button-wrap {
    display: flex;
    justify-content: center;
    gap : 25px;
}

.choice-unit {
    width : 120px;

    font-family: "Work Sans";
    font-weight: 400;
    font-size: 25px;

    padding : 8px 0;

    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 30px;

    transition: 250ms;
}

.choice-unit.now-choice {
    background-color: #000;
    color : white;
}

.portfolio-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 20px;
}
</style>