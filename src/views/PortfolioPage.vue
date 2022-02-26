<template>
<div class="page">
    <Header/>
    <div class="content">
        <h3>Portfolio</h3>
        <div class="unit-choice-buttons">
            <AnimationButton
                @btnClick="choiceUnit = 0"
                :buttonData="allButtonData"/>
            <AnimationButton
                @btnClick="choiceUnit = 1"
                :buttonData="atelierButtonData"/>
            <AnimationButton
                @btnClick="choiceUnit = 2"
                :buttonData="pixelButtonData"/>
        </div>
        <UnitDescription :choiceUnit="choiceUnit"/>
        <div class="portfolio-list">
            <PortfolioItem
                v-for="i, n in PortfolioDataList"
                :PortfolioData="i" :key="n"
                :isShow="getIsShow(i.unit)"/>
        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import PortfolioItem from "../components/PorstfolioPage/PortfolioItem.vue"
import UnitDescription from "../components/PorstfolioPage/UnitDescription.vue"
import AnimationButton from "./../components/AnimationButton.vue"

import PortfolioDataList from "./../assets/PortfolioList.js"

import ButtonData from "./../Model/ButtonData.js"

import Header from "../components/Header.vue";
import Footer from "./../components/Footer.vue"

export default {
    name : "PortfolioPage",
    data(){return{
        PortfolioDataList,
        choiceUnit : 0,

        allButtonData : new ButtonData(
            "All",
            "#000",
            true
        ),

        atelierButtonData : new ButtonData(
            "Atelier",
            "var(--Atelier1)",
            false
        ),

        pixelButtonData : new ButtonData(
            "Pixel",
            "var(--Pixel1)",
            false
        ),
    }},
    methods : {
        getIsShow(unit){
            if(this.choiceUnit == 0) return true
            if(unit == "Atelier" && this.choiceUnit == 1) return true
            if(unit == "Pixel" && this.choiceUnit == 2) return true

            return false
        }
    },
    components : {
        PortfolioItem,

        Header,
        Footer,

        UnitDescription,

        AnimationButton,
    },
    watch : {
        choiceUnit(it){
            this.allButtonData.isSelete = it == 0
            this.atelierButtonData.isSelete = it == 1
            this.pixelButtonData.isSelete = it == 2
        }
    }
}
</script>

<style scoped>
.content {
    margin-top : 80px;
    display: flex;
    flex-direction: column;
    

    gap : 60px;
}

h3 {
    font-size: 28px;
    font-weight: 500;
    line-height: 33px;
    text-align: center;
}

.unit-choice-buttons {
    display: flex;
    justify-content: center;
    gap : 24px;
}

.portfolio-list {
    display : grid;
    grid-template-columns: repeat(2, 1fr);
    gap : 20px;
}

@media (max-width : 900px) {
    .portfolio-list {
        grid-template-columns: 1fr;
    }
}
</style>