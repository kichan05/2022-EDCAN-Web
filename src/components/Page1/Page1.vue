<template>
<div class="main-page-page page1">
    <div class="bg"></div>
    <BgImg
        v-for="n in BG_IMG_COUNT" :key="n"
        :n="n"
        :isShow="currentBgIndex == n"/>

    <div class="content">
        <h1>We are Creators.</h1>
        <h6>EDCAN</h6>
    </div>
</div>
</template>

<script>
import BgImg from "./BgImg.vue"

export default {
    naem : "Page1",
    data(){return{
        BG_IMG_COUNT : 9,
        currentBgIndex : 1,
    }},
    components : {
        BgImg
    },
    mounted(){
        setInterval(()=>{
            this.currentBgIndex++
            // this.currentBgIndex %= this.BG_IMG_COUNT
            if(this.currentBgIndex == this.BG_IMG_COUNT + 1) this.currentBgIndex = 1
        }, 5*1000)
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
</style>