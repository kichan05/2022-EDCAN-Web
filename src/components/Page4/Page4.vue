<template>
<div class="main-page-page page4">
    <div class="content">
        <div class="description-wrap">
            <h3 class="page-title">Education</h3>
            <p class="description">
                이러한 과정들을 수행하기 위한 교육도 준비되어 있습니다.<br>
                모든 교육과정은 학과에 관계없이 <span @click="gotoEducan" class="educan">EDUCAN</span>에서 이수할 수 있습니다.
            </p>
        </div>

        <div class="educan-item-wrap">
            <EducanItem 
                v-for="i, n in educanData" :key="n"
                :educanStudyData="i"/>
        </div>

        <button @click="gotoEducan" class="goto-educan"><span class="bold">EDUCAN</span> 바로가기</button>
    </div>
</div>
</template>

<script>
import EducanItem from "./EducanItem.vue"
import { EducanStudyData, EducanStudyTag } from "../../Model/EducanStudyData.js"

const educanData = [
    new EducanStudyData(
        "Android 애플리케이션 개발",
        "Atelier",
        [
            new EducanStudyTag("Android", "#0B7038"),
            new EducanStudyTag("Kotlin", "#6F3C0B"),
            new EducanStudyTag("Jetpack", "#073042"),
        ],
        "Andorid의 극 기초, 앱을 만들수 있는 정도까지 수업합니다. XML ~ RecyclerView",
    ),
    new EducanStudyData(
        "Kotlin을 케이크처럼 쉽게 먹는 법",
        "Atelier",
        [
            new EducanStudyTag("Kotlin", "#6F3C0B" ),
            new EducanStudyTag("기초", "#95df80" ),
        ],
        "Android를 공부하려면 필수로 알아야하는 언어 (사실 필수아님ㅋㅋ 자바로 가능)",
    ),
    new EducanStudyData(
        "UI/UX 기초 강좌",
        "Pixel",
        [
            new EducanStudyTag("UI/UX", "#fe654a" ),
            new EducanStudyTag("기초이론", "#ffbc3f" ),
            new EducanStudyTag("디자인", "#27cf21" ),
        ],
        "UI/UX 기초 수업",
    ),
    new EducanStudyData(
        "웹 디자인",
        "Pixel",
        [
            new EducanStudyTag("웹디자인", "#8d80e7" ),
            new EducanStudyTag("Web", "#b97dbe" ),
        ],
        "웹 디자인 수업",
    ),
]


export default {
    name : "Page4",
    data(){ return{
        educanData
    }},
    methods : {
        gotoEducan(){
            setTimeout(()=>{
                    // location.href = "https://edu.edcan.kr"
                    window.open("https://edu.edcan.kr")
                }, 150)
        }
    },
    components : {
        EducanItem
    },
}
</script>

<style scoped>
.page4 {
    display: grid;
    grid-template-rows: 1fr;
}

.content {
    padding-top: 180px;
    padding-bottom: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap : 48px;
}

.description-wrap {
    display: flex;
    flex-direction: column;
    gap : 24px;

    text-align: center;
}

.description {
    font-size: 20px;
}

.educan-item-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 20px;
}

.description .educan {
    font-weight: bold;
    text-decoration: underline 3px;

    cursor: pointer;
}

.goto-educan {
    font-size: 25px;

    padding: 12px 16px;

    color : white;

    background: #74cbfa;
    border: 0px;
    border-radius: 6px;

    transition: transform 50ms;
}

.bold {
    font-weight: bold;
}

.goto-educan:hover {
    transform: scale(1.05);
}

.goto-educan:active {
    opacity: 0.5;
    transform: scale(0.95);
}

@media (max-width : 900px) {
    .educan-item-wrap {
        grid-template-columns: 1fr;
    }
}
</style>