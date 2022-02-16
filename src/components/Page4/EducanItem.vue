<template>
<div class="educan-item">
    <div class="educan-item-title">Android 애플리케이션 개발</div>
    <ul class="educan-item-tag-wrap">
        <li class="educan-item-tag android">Android</li>
        <li class="educan-item-tag kotlin">Kotlin</li>
        <li class="educan-item-tag jetpack">Jetpack</li>
    </ul>
    <p class="educan-item-description">
        요약 최대 2줄 이 치킨은 대단한 것은 아니지만 엄청난겁니다. 바로 뿌링뿌링소스가 들어가있다는 점이죠.
    </p>
</div>
</template>

<script>
export default {
    name : "Educan item"
}
</script>

<style scope>
.educan-item {
    border-radius: 12px;
    background: #E1E1E1;

    padding: 18px 22px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap : 8px;
}

.educan-item-title {
    font-size: 18px;
    font-weight: 400;
}

.educan-item-tag-wrap {
    display: flex;
    gap : 8px;
}

.educan-item-tag {
    border : 0px;
    border-radius: 34px;

    background: red;
    color : white;

    font-size: 12px;
    padding : 6px 12px;
}

.educan-item-tag.android {
    background: #0B7038;
}

.educan-item-tag.kotlin {
    background: #6F3C0B;
}

.educan-item-tag.jetpack {
    background: #073042;
}

.educan-item-tag.flutter {
    background: #023A78;
}

.educan-item-tag.ios {
    background: #3E3E3E;
}

.educan-item-description {
    color : var(--gray7)
}
</style>