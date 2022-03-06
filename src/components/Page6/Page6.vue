<template>
<div class="main-page-page page6">
    <div class="content">
        <div class="title">
            <h3>지금 바로 EDCAN에 지원하세요</h3>
            <p>
                최고의 동아리 EDCAN 에서 여러분들을 기다립니다.
                <br>
                소프트웨어과 1, 2학년, 콘텐츠디자인과 1, 2학년이 지원할 수 있습니다.
            </p>
        </div>
        <button class="goto-form nomal-button">지금 바로 지원하기</button>
    </div>
</div>
</template>

<script>
export default {
    name : "Page6",
}
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap : 112px;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 35px;
}

.title h3 {
    font-family: "Spoqa Han Sans Neo";
    font-weight: bold;
    font-size: 30px;
    text-align: center;
}

.title p {
    font-size: 25px;
    line-height: 35px;
    text-align: center;
}

.goto-form {
    padding : 14px 26px;
}
</style>