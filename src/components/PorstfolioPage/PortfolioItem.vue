<template>
<div class="portfolio-item"
    v-if="isShow">
    <div
        class="portfolio-img" :style="{backgroundImage : `url(${PortfolioData.img})`}"></div>
    <div class="portfolio-comment-wrap">
        <div class="portfolio-comment-data">
            <div class="title">{{ PortfolioData.title }}</div>
            <div class="comment">{{ PortfolioData.description }}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : "PortfolioItem",
    props : {
        isShow : Boolean,
        PortfolioData : Object,
    },
    // created(){
    //     alert("아이템 생성" + this.PortfolioData.title)
    // }
}
</script>

<style scoped>
.portfolio-item {
    aspect-ratio: 9 / 5;

    border-radius: 15px;

    overflow: hidden;

    position: relative;
}

.portfolio-item > div {
    width : 100%;
    height : 100%;

    position: absolute;
    top : 0px;
    left : 0px;
}

.portfolio-img {
    background-image: url('http://nextnews.kr/news/data/20200422/p1065599327402469_895_thum.PNG');
    background-color: #f5f5f5;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    transition: transform 250ms;
}

.portfolio-comment-wrap {
    color : white;
    background: #00000080;

    padding : 16px;

    opacity: 0;

    display: flex;
    align-items: flex-end;

    transition: opacity 250ms;
}

.portfolio-comment-wrap .title {
    font-size: 20px;
    font-weight: bold;
}

.portfolio-item:hover .portfolio-img {
    transform: scale(1.1);
}

.portfolio-item:hover .portfolio-comment-wrap {
    opacity: 1;
}

</style>