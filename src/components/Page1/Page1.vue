<template>
<div class="main-page-page page1">
    <div class="bg">
        <div
            v-for="i in BG_IMG_COUNT" :key="i"
            :class="{'activate' : i == currentBgIndex}"
            :style="{backgroundImage: `url('/img/main_page_bg/bg_${i - 1}.webp')`}"></div>
    </div>

    <div class="content">
        <h1>{{ titleMsg }}</h1>
        <h6>{{ subtitleMsg }}</h6>
    </div>

    <transition name="more-msg-ani">
        <div class="more-wrap" @click="moreClick" v-if="isMoreMsgShow">
            <span class="more">더 알아보기</span>
            <img src="/img/arrow.svg" alt="" class="arrow">
        </div>
    </transition>
</div>
</template>

<script>
// import BgImg from "./BgImg.vue"

const _titleMsg = "We are Creators."
const _subtitleMsg = "EDCAN"

let titleMsgLen = -5
let subTitleMsgLen = 1

export default {
    naem : "Page1",
    data(){return{
        BG_IMG_COUNT : 6,
        currentBgIndex : 1,
        titleMsg : "",
        subtitleMsg : "",

        isMoreMsgShow : false,
    }},
    components : {
        // BgImg
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

            if(_subtitleMsg.length + 5 <= subTitleMsgLen){
                this.isMoreMsgShow = true
            }

            if(titleMsgLen >= this.titleMsg.length + 100){
                titleMsgLen = -5
                subTitleMsgLen = 1

                this.titleMsg = ""
                this.subtitleMsg = ""
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

.bg, .bg > * {
    width: 100%;
    height: 100vh;
}

.bg {
    background-color: rgba(0, 0, 0, 0.55);

    position: absolute;

    top : 0;
    left : 0;
    z-index: -1;
}

.bg div {
    opacity: 0;

    position: absolute;
    top : 0;
    left : 0;
    background-position: center;

    transition: opacity 1500ms;;
}

.bg div.activate {
    opacity: 1;
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
    animation-delay: 550ms;
    animation-iteration-count: infinite;
}

@keyframes bg-animation {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes more-arrow-animation {
    0%, 100% {
        transform: translateY(-5px);
    }

    50% {
        transform: translateY(15px);
    }
}


.more-msg-ani-enter-from {
    opacity: 0;
}

.more-msg-ani-enter-active {
    transition: 1000ms;
}

.more-msg-ani-enter-to {
    opacity: 1;
}

</style>