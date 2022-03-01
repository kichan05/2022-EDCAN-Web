<template>
<header>
    <div class="logo-wrap" @click="$router.push('/')">
        <img class="logo symbol" src="/img/edcan.svg" alt="">
        <img class="logo typo" src="/img/edcan_typo.svg" alt="">
    </div>
</header>
</template>

<script>
export default {
    name : "Header"
}
</script>

<style scoped>
header {
    width : 100%;
    height : 80px;

    background-color: #fff;

    border-bottom : 1px solid #dee2e6;

    padding : 16px 20px 16px 0;

    display: flex;

    position: fixed;
    top : 0px;
    z-index: 2;
}

.logo-wrap {
    display: flex;
    gap : 0px;

    cursor: pointer;
}

.logo-wrap img {
    width : 60%;

    transition: 1200ms;
}

.logo-wrap:hover .symbol {
    transform: rotateZ(2turn) scale(1.15);
}

.logo-wrap:hover .typo {
    /* transform: rotateY(1turn); */
}
</style>