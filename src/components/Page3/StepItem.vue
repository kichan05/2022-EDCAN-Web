<template>
<div class="step-item" :class="[`step` + stepData.step]">
    <h4>Step {{ stepData.step }}</h4>
    <div class="bar"></div>
    <h3>{{ stepData.title }}</h3>
    <p>{{ stepData.descriptions }}</p>
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
    align-items: flex-start;
    gap : 8px;

    text-align: left;
}

.step-item h4 {
    font-family: "Spoqa Han Sans Neo";
    font-size: 22px;
    font-weight: 500;
}

.step-item h3 { 
    font-size: 28px;
}

.step-item .bar {
    width : 30px;
    height: 5px;

    border-radius: 20px;

    background-color: #000;
}

.step-item p {
    width : 55%;
    font-size: 16px;
    font-weight: 400;
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