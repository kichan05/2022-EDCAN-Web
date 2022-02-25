<template>
<div class="unit-descriptions-wrap">
    <transition name="unit-card">
        <UnitCard
            :unitData="edcanData"
            v-if="choiceUnit == 0"/>
        <UnitCard
            :unitData="atData"
            v-else-if="choiceUnit == 1"/>
        <UnitCard
            :unitData="pxData"
            v-else-if="choiceUnit == 2"/>
    </transition>
</div>
</template>

<script>
import UnitCardData from "./../../Model/UnitCardData.js"

import UnitCard from "./UnitCard.vue"
export default {
    name : "unit descriptions",
    data(){return{
        edcanData : new UnitCardData(
            "edcan",
            "EDCAN",
            [
                "EDCAN은 모바일 콘텐츠 개발반이며",
                "개발자 유닛인 ATELIER와",
                "디자이너 유닛인 Pixel로구성됩니다.",
            ]
        ),
        atData : new UnitCardData(
            "at",
            "Atelier Unit",
            [
                "Atelier는 개발자 유닛이며, 뛰어난 문제 해결력과 창의력을 지닌 개발자를 양성합니다.",
                "안드로이드 앱 개발과 웹 두 분야 모두 공부하는 유닛입니다."
            ]
        ),
        pxData : new UnitCardData(
            "px",
            "Pixel Unit",
            [
                "Pixel은 콘텐츠디자인과가 지원할 수 있는 디자인 유닛이며, 뛰어난 분석력과 창의력을 지닌 디자이너를 양성합니다."
            ]
        ),

    }},
    props : {
        choiceUnit : Number
    },
    components : {
        UnitCard
    }
}
</script>

<style scoped>
.unit-descriptions-wrap {
    width : 100%;
    height: 500px;

    margin-bottom : 50px;

    position: relative;
}

.unit-card-enter-from {
    position: absolute;
    top : 0px;
    left : 0px;

    opacity: 0;
    transform: translateX(-100%);
}

.unit-card-enter-active {
    position: absolute;
    top : 0px;
    left : 0px;

    transition: 500ms;
}

.unit-card-enter-to {
    position: absolute;
    top : 0px;
    left : 0px;

    opacity: 1;
    transform: translateX(0%);
}

.unit-card-leave-from {
    opacity: 1;
    transform: scale(1);
}

.unit-card-leave-active {
    transition: 500ms;
}

.unit-card-leave-to {
    opacity: 0;
    transform: scale(0.75);
}

@media (max-width : 650px) {
    .type-unit {
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
        justify-content: space-evenly;
        gap : 12px;
    }

    .type-unit .logo {
        width : 30%;
    }

    .type-unit .descriptions-wrap {
        padding : 0;
    }
}
</style>