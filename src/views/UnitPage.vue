<template>
<div class="page unit-page">
    <div class="content">
        <div class="unit-item">
            <img src="/img/ATELIER_typo_horizontal.svg" alt="" class="logo">

            <p class="unit-comment">
                Atelier는 소프트웨어과가 지원할 수 있는 개발 유닛이며, 뛰어난 문제 해결력과 창의력을 지닌 개발자를 양성합니다.
                Atelier에 속한 부원은 다음 교육과정을 이수합니다.
            </p>

            <div class="curriculum-list">
                <CurriculumItem
                    v-for="i, n in atCurriculumDataList" :key="n"
                    :curriclumData="i"
                    :unit="'at'"
                    />
            </div>
        </div>
        <div class="unit-item">
            <img src="/img/Pixel_typo_horizeontal.svg" alt="" class="logo">

            <p class="unit-comment">
                Pixel은 콘텐츠디자인과가 지원 할 수 있는 디자인 유닛이며,  
                뛰어난 창의력을 가진 디자이너를 양성합니다.
                픽셀 부원은 다음 과정을 이수합니다.
            </p>

            <div class="curriculum-list">
                <CurriculumItem
                    v-for="i, n in pxCurriculumDataList" :key="n"
                    :curriclumData="i"
                    :unit="'px'"
                    />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CurriculumItem from "./../components/UnitPage/CurriculumItem.vue"

import CurriculumData from "./../Model/CurriculumData"

export default {
    name : "Unit page",
    data(){return{
        atCurriculumDataList : [
            new CurriculumData(
                "Kotlin 교육 과정",
                "안드로이드를 공부하기 위해서 기본적으로 알아야 하는 언어인 Kotlin을 공부합니다.",
            ),
            new CurriculumData(
                "Android 기초 교육과정",
                "Android Studio를 사용한 앱 개발의 필수적인 요소들을 공부합니다.",
            ),
            new CurriculumData(
                "웹 프론트 엔드 교육과정",
                "2021년 가장 많이 사용된 웹 프레임워크인 Vue.js를 사용한 프론트 엔드를 공부합니다.",
            ),
            new CurriculumData(
                "웹 백엔드 교육 과정",
                "V8 기반의 JavaScript 런타임인 Node.js를 사용한 백엔드를 공부합니다.",
            ),
        ],

        pxCurriculumDataList : [
            new CurriculumData(
                "모바일 UI/UX 디자인 과정",
                "Figma를 통해 모바일 UI/UX 디자인에 대한 이론을 실습해보며 학습합니다.",
            ),
            new CurriculumData(
                "웹 UI/UX 디자인 과정",
                "Figma를 통해 웹 UI/UX 디자인에 대한 이론을 실습해보며 학습합니다.",
            ),
            new CurriculumData(
                "Figma, XD 사용 교육 과정",
                "Figma와 XD의 툴 사용 방법을 학습합니다. ",
            ),
            new CurriculumData(
                "2022 디자인 트렌드 학습 과정",
                "2022 UI/UX 디자인 트렌드를 통해 UI/UX에 대한 눈을 키우고 학습합니다.",
            ),
        ]
    }},
    components : {
        CurriculumItem,
    }
}
</script>

<style scoped>
.unit-page {
    padding : 60px 0;
}

.unit-item {
    padding : 60px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 42px;
}

.logo { 
    width : 100%;
    max-width : 390px;
}

.unit-comment {
    max-width: 470px;

    font-size: 20px;
    line-height: 30px;
    text-align: center;
}

.curriculum-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 32px;
}

@media (max-width : 900px) {
    .curriculum-list {
        grid-template-columns: 1fr;
    }
}
</style>