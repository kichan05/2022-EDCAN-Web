<template>
<div class="main-page-page page3">
    <div class="content">
        <h3>Development Process</h3>
        <div class="steps-wrap">
            <StepItem
                v-for="(i, n) in stepDataList" :key="n" :stepData="i"/>
        </div>
    </div>
</div>
</template>

<script>
import StepItem from "./StepItem.vue"

import StepData from "./../../Model/StepData.js"

export default {
    name : "Page3",
    data(){return{
        stepDataList : [
            new StepData(
                1,
                "기획",
                [
                    "모든 제작의 시작에는 기획이 있습니다.",
                    "별도의 기획자가 있는 것이 아닌, 모두가 목소리를 모아 프로덕트를 기획합니다.",
                ]
            ),
            new StepData(
                2,
                "최소 기능 구현(MVP) 제작",
                [
                    "핵심적인 기능들만 동작하는 프로덕트를 제작합니다.",
                    "IA로 핵심 기능을 정리하고, Flowchart로 Flow를 정립하여 Wireframe을 빠르게 제작하고,",
                    "바로 개발에 착수하여, 최소한의 노력으로 가장 핵심 요소만 구현합니다.",
                ]
            ),
            new StepData(
                3,
                "테스트",
                [
                    "MVP를 테스트하며, 해당 기획의 의도가 성공적으로 수행되었는지 검토합니다.",
                    "이 과정에서 사용자와 소통하는 법을 배웁니다.",
                ]
            ),
            new StepData(
                4,
                "완전한 프로덕트 제작",
                [
                    "테스트를 마치고 기획의 가능성을 확인하였다면, 완전한 프로덕트의 디자인과 개발을 시작합니다.",                    "이 단계에서는 충분한 시간을 가지고 각 과정의 원칙에 따라 제작합니다.",                ]
            ),
        ]
    }},
    components : {
        StepItem
    }
}
</script>

<style scoped>
.page3 {
    min-height : min-content;

    color : white;

    background: linear-gradient(107.56deg, #400091 0%, #52142A 50%, #000000 100%);
}

.content {
    min-height : 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap : 44px;
}

h3 {
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
}

.steps-wrap {
    display: flex;
    flex-direction: column;
    gap : 36px;
}

@media (max-width : 900px) {
    .content {
        padding : 64px 32px;
    }
}
</style>