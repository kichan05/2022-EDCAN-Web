<template>
<div class="step-item step1">
    <h4>Step {{ stepData.step }} : {{ stepData.title }}</h4>
    <div class="descriptions-wrap"
        v-for="(i, n) in stepData.descriptions" :key="n">
        {{ i }}
    </div>
</div>
</template>

<script>
export default {
    naem : "Step Item",
    props : {
        stepData : Object
    }
}
</script>

<style scoped>
.step-item {
    display: flex;
    flex-direction: column;
    gap : 8px;

    text-align: center;
}

.step-item h4 {
    font-family: "Spoqa Han Sans Neo";
    font-size: 24px;
    font-weight: 400;
}

.step-item .descriptions-wrap {
    font-size: 20px;
}

@media (max-width : 900px) {
    .step-item h4 {
        font-size: 20px;

        display: flex;
        flex-direction: column;
        gap : 0px;
    }

    .step-item .descriptions-wrap {
        font-size: 16px;
    }
}
</style>