<template>
<main>
    <Page4/>
    <Page5/>
</main>
</template>

<script>
import Page4 from "../components/Page4/Page4.vue";
import Page5 from "../components/Page5/Page5.vue";

export default {
    name : "MainPage",
    components : {
        Page4,
        Page5,
    }
}
</script>

<style>
.main-page-page {
    width : 100%;
    min-height: 100vh;
}

.main-page-page .page-title {
    font-size: 28px;
    font-weight: 500;
}
</style>