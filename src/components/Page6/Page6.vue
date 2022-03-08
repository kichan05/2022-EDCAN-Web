<template>
<div class="main-page-page page6">
    <div class="content">
        <div class="title">
            <h3>지금 바로 EDCAN에 지원하세요</h3>
            <p>
                최고의 동아리 EDCAN 에서 여러분들을 기다립니다.
                <br>
                소프트웨어과 1학년, 콘텐츠디자인과 1학년이 지원할 수 있습니다.
            </p>
        </div>
        <div class="jiwon-form-wrap">
            <div class="goto-jiwon-wrap at">
                <img src="/img/ATELIER_typo_verticality.svg" alt="">
                <button class="goto-form nomal-button" @click="$gotoJiwonAt">개발자 유닛 지원하기</button>
            </div>
            <div class="goto-jiwon-wrap px">
                <img src="/img/Pixel_typo_verticality.svg" alt="">
                <button class="goto-form nomal-button" @click="$gotoJiwonPx">디자이너 유닛 지원하기</button>
            </div>
        </div>
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
    padding-bottom : 100px;

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
    font-size: 20px;
    padding : 14px 5px;
}

.jiwon-form-wrap {
    width : 100%;
    max-width: 600px;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 80px;

}

.goto-jiwon-wrap {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    gap : 50px;
}

.goto-jiwon-wrap.at img {
    width : 200px;
    margin : 0 auto;
}

.goto-jiwon-wrap.px img {
    width : 250px;
    margin : 0 auto;
}

.goto-jiwon-wrap button {
    
}
</style>