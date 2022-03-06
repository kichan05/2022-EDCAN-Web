<template>
<div class="main-page-page page5">
<div class="content">
    <!-- {{ $store.state.portfolioList }} -->
    <!-- <div v-for="(i, n) in portfolioList" :key="n">{{ i }}</div> -->
    <h3>Portfolio</h3>
    <div class="portfolio-list-wrap">
        <div class="portfolio-list">
            <PortfolioItem
                v-for="i, n in $store.state.portfolioList"
                :PortfolioData="i" :key="n"
                :isShow="true"/>
            <!-- <PortfolioItem
                v-for="i, n in PortfolioDataList" :key="n"
                :isShow="true"
                :PortfolioData="i"
                /> -->
        </div>
    </div>
    <button
        class="goto-PR"
        @click="gotoPR">전체 보기</button>
</div>
</div>
</template>

<script>
import PortfolioItem from "./../PorstfolioPage/PortfolioItem.vue"

import PortfolioDataList from "./../../assets/PortfolioList"

import { mapState } from "vuex";

let _PORTFOLIO_ITEM_WIDTH

if(window.innerWidth < 900){
    _PORTFOLIO_ITEM_WIDTH = 250
}   else {
    _PORTFOLIO_ITEM_WIDTH = 350
}

const PORTFOLIO_ITEM_WIDTH = _PORTFOLIO_ITEM_WIDTH;
const PORTFOLIO_ITEM_MARGIN = 20;

let portfolioItemLefts = []

export default {
    name : "Page5",
    data(){return{
        PortfolioDataList,

        isMouseOn : false
    }},
    components : {
        PortfolioItem,
    },
    methods : {
        gotoPR(){
            this.$router.push('PR')
            window.scrollTo(0, 0)
        }
    },
    computed : {
        ...mapState(["portfolioList"])
    },
    // beforeMount(){
    //     this.$store.dispatch("getAllPortfolio")
    // },
    mounted(){
        document.querySelector(".portfolio-list").addEventListener("mouseover", ()=>{
            this.isMouseOn = true
        })
        document.querySelector(".portfolio-list").addEventListener("mouseout", ()=>{
            this.isMouseOn = false
        })

        let portfolioItems = document.querySelectorAll(".portfolio-item")
        
        portfolioItems.forEach((element, n)=>{
            element.style.width = PORTFOLIO_ITEM_WIDTH + "px"
            portfolioItemLefts.push(PORTFOLIO_ITEM_MARGIN * (n + 1) + PORTFOLIO_ITEM_WIDTH * n)

            element.style.left =  portfolioItemLefts[n] + "px"
        })

        setInterval(()=>{
            portfolioItems.forEach((element, n)=>{
                if(this.isMouseOn) return

                portfolioItemLefts[n]--
                element.style.left = portfolioItemLefts[n] + "px"

                if(portfolioItemLefts[n] < -400){
                    portfolioItemLefts[n] = portfolioItemLefts[(n + -1 + portfolioItemLefts.length) % portfolioItemLefts.length] + PORTFOLIO_ITEM_WIDTH + PORTFOLIO_ITEM_MARGIN
                }
            })
        }, 15)
    },
    updated(){
        let portfolioItems = document.querySelectorAll(".portfolio-item")

        portfolioItems.forEach((element, n)=>{
            element.style.width = PORTFOLIO_ITEM_WIDTH + "px"
            portfolioItemLefts.push(PORTFOLIO_ITEM_MARGIN * (n + 1) + PORTFOLIO_ITEM_WIDTH * n)

            element.style.left =  portfolioItemLefts[n] + "px"
        })

        setInterval(()=>{
            portfolioItems.forEach((element, n)=>{
                if(this.isMouseOn) return

                portfolioItemLefts[n]--
                element.style.left = portfolioItemLefts[n] + "px"

                if(portfolioItemLefts[n] < -400){
                    portfolioItemLefts[n] = portfolioItemLefts[(n + -1 + portfolioItemLefts.length) % portfolioItemLefts.length] + PORTFOLIO_ITEM_WIDTH + PORTFOLIO_ITEM_MARGIN
                }
            })
        }, 15)
    }
}
</script>

<style scoped>

.content {
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

h3 {
    font-family: "Work Sans";
    font-size: 28px;
    font-weight: 500;
    text-align: center;
}

.portfolio-list-wrap {
    width : 100%;
    height : 100%;

    position: relative;
    transform: translateY(-70px);
}

.portfolio-item {
    position: absolute;
}


.goto-PR {
    width: 150px;
    height: 60px;

    font-size: 25px;

    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
}

.goto-PR:hover {
    color : white;
    background-color: black;
}

.goto-PR:active {
    opacity: 0.5;
    transform: scale(0.95);
}

</style>