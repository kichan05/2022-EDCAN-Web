<template>
<div class="main-page-page page1">
    <div class="content">
        <h1>We are Creators.</h1>
        <h6>EDCAN</h6>
    </div>
</div>
</template>

<script>
export default {
    naem : "Page1"
}
</script>

<style scoped>
.page1 {
    height : 100vh;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/img/main_page_bg/bg_01.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content {
    height : 100%;

    color : white;

    font-family: "Work Sans";
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content h1{
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0.025em;
}

.content h6 {
    font-size: 32px;
    font-weight: 200;
    letter-spacing: 0em;
}
</style>