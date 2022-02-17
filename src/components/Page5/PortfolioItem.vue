<template>
<div class="portfolio-item">
    <div class="img"></div>
    <div class="description-wrap">
        <h3>{{ PortfolioData.title }}</h3>
        <p class="description">{{ PortfolioData.description }}</p>
    </div>
</div>
</template>

<script>
export default {
    name : "Portfolio item",
    props : {
        PortfolioData : Object
    }
}
</script>

<style scoped>
.portfolio-item {
    aspect-ratio: 9 / 5;

    border-radius: 15px;

    position: relative;

    overflow: hidden;
    cursor: pointer;
}

.portfolio-item .img {
    width : 100%;
    height : 100%;

    background-image: url("https://images.otwojob.com/product/h/j/5/hj5pm6HslR63RDN.jpg/o2j/resize/852x622%3E");
    background-position: center;

    position: absolute;
    top : 0;
    left : 0;

    transition: transform 250ms;
}

.description-wrap {
    height : 100%;

    color : white;

    padding : 16px;

    background: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap : 8px;

    position: absolute;
    top : 0;
    left : 0;
    right : 0;
    z-index: 1;

    opacity: 0;
    transition: opacity 250ms;
}

.portfolio-item:hover .img {
    transform: scale(1.1);
}

.portfolio-item:hover .description-wrap {
    opacity: 1;
}
</style>