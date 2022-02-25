<template>
<div class="unit-card" :class="[unitData.type]">
    <div class="descriptions-wrap" v-if="unitData.type == 'px'">
        <h2>{{ unitData.title }}</h2>
        <div>
            <p v-for="i, n in unitData.description" :key="n">{{ i }}</p>
        </div>
    </div>

    <img class="logo logo-ani-Z" src="/img/EDCAN.svg" alt="ATELIER 로고"
        v-if="unitData.type == 'edcan'">
    <img class="logo logo-ani-Y" src="/img/Atelier_typo_verticality.svg" alt="ATELIER 로고"
        v-else-if="unitData.type == 'at'">
    <img class="logo logo-ani-Y" src="/img/Pixel_typo_verticality.svg" alt="ATELIER 로고"
        v-else-if="unitData.type == 'px'">

    <div class="descriptions-wrap" v-if="unitData.type != 'px'">
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

    border-radius: 1rem;

    padding : 32px;

    margin-bottom: 50px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap : 32px;
}

.unit-card .descriptions-wrap {
    font-size: 24px;

    padding : 32px;

    grid-column: span 3;
}

.unit-card .logo {
    width : 70%;

    margin : 0 auto;
    
    grid-column: span 2;
}

.unit-card.edcan {
    color : #272727;
    background-color: #96f1ff;
}

.unit-card.at {
    color : white;
    background-color: #60a5fa;
}

.unit-card.px {
    color : #4d4d4d;
    background-color: #ffe7c8;
}

.logo-ani-Y {
    animation: unit-logo-animation-Y 1s;
    animation-delay: 600ms;

    transition: transform 1000ms;
}

.logo-ani-Y:hover {
    transform: rotateY(1turn) scale(1.1);
}

.logo-ani-Z {
    animation: unit-logo-animation-Z 1s;
    animation-delay: 600ms;

    transition: transform 1000ms;
}

.logo-ani-Z:hover {
    transform: rotateZ(1turn) scale(1.1);
}

@keyframes unit-logo-animation-Y {
    0% {
        transform : rotateY(0turn);
    }

    100% {
        transform : rotateY(1turn);
    }
}

@keyframes unit-logo-animation-Z {
    0% {
        transform : rotateZ(0turn);
    }

    100% {
        transform : rotateZ(1turn);
    }
}
</style>