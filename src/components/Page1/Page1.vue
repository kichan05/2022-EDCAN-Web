<template>
<div class="main-page-page page1">
    <div class="bg"></div>
    <BgImg
        v-for="n in BG_IMG_COUNT" :key="n"
        :n="n"
        :isShow="currentBgIndex == n"/>

    <div class="content">
        <h1>{{ titleMsg }}</h1>
        <h6>{{ subtitleMsg }}</h6>
    </div>

    <div class="more-wrap" @click="moreClick">
        <span class="more">더 알아보기</span>
        <img src="/img/arrow.svg" alt="" class="arrow">
    </div>
</div>
</template>

<script>
import BgImg from "./BgImg.vue"

const _titleMsg = "We are Creators."
const _subtitleMsg = "EDCAN"

let titleMsgLen = -5
let subTitleMsgLen = 1

export default {
    naem : "Page1",
    data(){return{
        BG_IMG_COUNT : 9,
        currentBgIndex : 1,
        titleMsg : "",
        subtitleMsg : "",
    }},
    components : {
        BgImg
    },
    methods: {
        moreClick(){
            const windowHeight = window.innerHeight;

            window.scroll({
                behavior : "smooth",
                left : 0,
                top : windowHeight
            })

            // window.scrollBy(0, windowHeight)
        }
    },
    mounted(){
        setInterval(()=>{
            this.currentBgIndex++
            // this.currentBgIndex %= this.BG_IMG_COUNT
            if(this.currentBgIndex == this.BG_IMG_COUNT + 1) this.currentBgIndex = 1
        }, 5*1000)

        setInterval(()=>{
            if(titleMsgLen > 0)
                this.titleMsg = _titleMsg.slice(0, titleMsgLen++)
            else
                titleMsgLen++
            
            if(_titleMsg.length + 5 <= titleMsgLen){
                this.subtitleMsg = _subtitleMsg.slice(0, subTitleMsgLen++)
            }
        }, 100)
    }
}
</script>

<style scoped>
.page1 {
    height : 100vh;

    background-color: rgba(0, 0, 0, 0.55);

    position: relative;
}

.bg {
    background-color: var(--gray4);
}

.bg-wrap {
    width : 100%;
    height : 100%;

    position: absolute;
    z-index: -1;
}

.bg-img.isShow {
    opacity: 1;
}

.content {
    height : 100%;

    color : white;

    font-family: "Work Sans";
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content h1{
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 0.025em;
}

.content h6 {
    font-size: 32px;
    font-weight: 200;
    letter-spacing: 0em;
}

.more-wrap {
    color : white;
    font-size: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 20px;

    position: absolute;
    bottom : 70px;
    left : 50%;
    z-index: 3;

    transform: translateX(-50%);

    cursor: pointer;
}

.arrow {
    width : 10%;

    animation-name : more-arrow-animation;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
}

@keyframes more-arrow-animation {
    0%, 100% {
        transform: translateY(-5px);
    }

    50% {
        transform: translateY(15px);
    }
}


</style>