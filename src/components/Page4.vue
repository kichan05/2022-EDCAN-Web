<template>
<div class="main-page-page page4">
    <div class="content">
        <div class="description-wrap">
            <h3>Education</h3>
            <p class="description">이러한 과정들을 수행하기 위한 교육도 준비되어 있습니다.<br>모든 교육과정은 학과에 관계없이 EDCAN EDU에서 이수할 수 있습니다.</p>
        </div>

        <div class="educan-item-wrap">
            <EducanItem/>
            <EducanItem/>
            <EducanItem/>
            <EducanItem/>
        </div>
    </div>
</div>
</template>

<script>
import EducanItem from "./Page4/EducanItem.vue"

export default {
    name : "Page4",
    components : {
        EducanItem
    }
}
</script>

<style scoped>
.page4 {
    display: grid;
    grid-template-rows: 1fr;
}

.content {
    padding : 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap : 48px;
}

.description-wrap {
    display: flex;
    flex-direction: column;
    text-align: center;

    gap : 24px;
}

h3 {
    font-size: 28px;
    font-weight: 500;
}

.description {
    font-size: 20px;
}

.educan-item-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 12px;
}
</style>