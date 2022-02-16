<template>
<div class="main-page-page page4">
    <div class="content">
        <!-- <h3>Education</h3>
        <p>이러한 과정들을 수행하기 위한 교육도 준비되어 있습니다.<br>모든 교육과정은 학과에 관계없이 EDCAN EDU에서 이수할 수 있습니다.</p> -->

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
.page4 .content {
    padding : 12px;

    display: flex;
    flex-direction: row;
    justify-content: center;
}

.page4 .educan-item-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>