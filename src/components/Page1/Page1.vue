<template>
<div class="main-page-page page1">
    <div
        v-for="n in BG_IMG_COUNT" :key="n"
        :style="{backgroundImage : `url('/img/main_page_bg/bg_${n}.jpg')`}"
        :class="{isShow : n == currentBgIndex}"
        class="bg-img"></div>
    <div class="content">
        <h1>We are Creators.</h1>
        <h6>EDCAN</h6>
    </div>
</div>
</template>

<script>
export default {
    naem : "Page1",
    data(){return{
        BG_IMG_COUNT : 9,
        currentBgIndex : 1,
    }},
    mounted(){
        setInterval(()=>{
            this.currentBgIndex++
            // this.currentBgIndex %= this.BG_IMG_COUNT
            if(this.currentBgIndex == this.BG_IMG_COUNT + 1) this.currentBgIndex = 1
        }, 10*1000)
    }
}
</script>

<style scoped>
.page1 {
    height : 100vh;

    background-color: rgba(0, 0, 0, 0.55);

    position: relative;
}

.bg-wrap {
    width : 100%;
    height : 100%;

    position: absolute;
    z-index: -1;
}

.bg-img {
    width : 100%;
    height : 100%;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    position: absolute;
    z-index: -1;

    opacity: 0;

    transition: 500ms;
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
    font-weight: 500;
    letter-spacing: 0.025em;
}

.content h6 {
    font-size: 32px;
    font-weight: 200;
    letter-spacing: 0em;
}
</style>