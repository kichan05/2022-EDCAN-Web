<template>
<div class="educan-item">
    <div class="educan-item-title">{{ educanStudyData.title }}</div>
    <ul class="educan-item-tag-wrap">
        <li class="educan-item-tag" :class="educanStudyData.unit"># {{ educanStudyData.unit }}</li>

        <li
            v-for="i, n in educanStudyData.tags" :key="n"
            :style="{backgroundColor : i.bgColor}"
            class="educan-item-tag"># {{ i.tagName }}</li>

    </ul>
    <p class="educan-item-description">
        {{ educanStudyData.description }}
    </p>
</div>
</template>

<script>
export default {
    name : "Educan item",
    props : {
        educanStudyData : Object
    }
}
</script>

<style scoped>
.educan-item {
    border-radius: 12px;
    background: #fafafa;

    box-shadow: 5px 5px 6px #f0f0f0, -2px -2px 3px #f0f0f0;

    padding: 18px 22px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap : 8px;

    transition: 250ms;

    cursor: pointer;
}

.educan-item:hover {
    box-shadow: 7px 7px 6px #f0f0f0, -1px -1px 3px #f0f0f0;
}

.educan-item:active {
    transform: scale(0.99);
}

.educan-item-title {
    font-size: 18px;
    font-weight: 600;
}

.educan-item-tag-wrap {
    display: flex;
    gap : 8px;
}

.educan-item-tag {
    border : 0px;
    border-radius: 34px;

    color : white;

    font-size: 12px;
    padding : 6px 12px;
}

.educan-item-tag.Atelier {
    background: #77aeff;
}

.educan-item-tag.Pixel {
    background: #ff7272;
}

/* .educan-item-tag.Android {
    background: #0B7038;
}

.educan-item-tag.Kotlin {
    background: #6F3C0B;
}

.educan-item-tag.기초 {
    background: #95df80;
}

.educan-item-tag.UIUX {
    background: #fe654a;
}

.educan-item-tag.Jetpack {
    background: #073042;
}

.educan-item-tag.Flutter {
    background: #023A78;
}

.educan-item-tag.iOS {
    background: #3E3E3E;
} */

.educan-item-description {
    color : var(--gray7);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>