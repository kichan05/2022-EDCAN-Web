<template>
<div class="unit-card" :class="[unitData.type]">
    <div class="descriptions-wrap card" v-if="unitData.type == 'at'">
        <h2>{{ unitData.title }}</h2>
        <div>
            <p v-for="i, n in unitData.description" :key="n">{{ i }}</p>
        </div>
    </div>

    <img class="logo card logo-ani-Y" src="/img/edcan_typo_verticality.svg" alt="ATELIER 로고"
        v-if="unitData.type == 'edcan'">
    <img class="logo card logo-ani-Y-reverse" src="/img/ATELIER_typo_verticality.svg" alt="ATELIER 로고"
        v-else-if="unitData.type == 'at'">
    <img class="logo card logo-ani-Y" src="/img/Pixel_typo_verticality.svg" alt="ATELIER 로고"
        v-else-if="unitData.type == 'px'">

    <div class="descriptions-wrap card" v-if="unitData.type != 'at'">
        <h2>{{ unitData.title }}</h2>
        <div>
            <p v-for="i, n in unitData.description" :key="n">{{ i }}</p>
        </div>
    </div>
</div>
</template>

<script>
import UnitCardData from "./../../Model/UnitCardData.js"

export default {
    name : "Unit card",
    props : {
        unitData : UnitCardData
    }
}
</script>

<style scoped>
.unit-descriptions-wrap {
    position: relative;
}

.unit-card {
    width : 100%;
    height: 500px;

    border-radius: 1.5rem;

    padding : 32px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap : 32px;
}

.unit-card.edcan {
    background-color: #00b8d4;
}

.unit-card.at {
    background-color: #60a5fa;
}

.unit-card.px {
    background-color: #f87171;
}

.unit-card .logo {
    width : 75%;
    height : 75%;

    margin : 0 auto;
    padding : 30px;

    grid-column: span 2;
}

.unit-card.px .logo {
    padding : 30px 50px;
}

.unit-card .descriptions-wrap {
    font-size: 24px;

    padding : 32px;

    grid-column: span 3;
}

.unit-card .card {
    color : #4d4d4d;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 20px 20px #4141412a;
}

h2 {
    padding : 0 3px;

    overflow: hidden;

    display: inline-block;

    position: relative;

    transform: translateX(-3px);
}


h2::before {
    content: "";

    width : 120%;

    border-bottom : 4px solid #4d4d4d;
    border-radius: 20px;

    position: absolute;
    bottom : 1px;
    left : 0px;

    transform: translateX(-100%);

    animation-name: unit-card-title-underline;
    animation-duration: 700ms;
    animation-delay: 600ms;
    animation-fill-mode: forwards;
}


.logo-ani-Y {
    animation: unit-logo-animation-Y 1s;
    animation-delay: 600ms;

    transition: transform 1000ms;
}

.logo-ani-Y:hover {
    transform: rotateY(1turn) scale(1.1);
}

.logo-ani-Y-reverse {
    animation: unit-logo-animation-Y-reverse 1s;
    animation-delay: 600ms;

    transition: transform 1000ms;
}

.logo-ani-Y-reverse:hover {
    transform: rotateY(-1turn) scale(1.1);
}

@keyframes unit-card-title-underline {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(-3%);
    }
}

@keyframes unit-logo-animation-Y {
    0% {
        transform : rotateY(0turn);
    }

    100% {
        transform : rotateY(1turn);
    }
}

@keyframes unit-logo-animation-Y-reverse {
    0% {
        transform : rotateY(0turn);
    }

    100% {
        transform : rotateY(-1turn);
    }
}

@media (max-width : 950px) {
    .unit-card .logo {
        width : 100%;
    }
}

@media (max-width : 900px) {
    .unit-card {
        height : min-content;

        display: flex;
        flex-direction: column;
    }

    .unit-card.at {
        flex-direction: column-reverse;
    }

    .unit-card .logo {
        width: 70%;
        height : unset;
        aspect-ratio: 1 / 1;
    }
}

@media (max-width : 800px) {
    .unit-card.px .logo {
        padding : 30px;
    }
}

</style>