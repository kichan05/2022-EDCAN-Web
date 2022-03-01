<template>
<div class="loading">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
</div>
</template>

<script>
export default {
    name : "Loading"
}
</script>

<style scoped>
.loading {
    position: fixed;
    top: 50%;
    left : 50%;
    transform: translate(-50%, -50%);
}
.loading div {
    border : 5px solid transparent;
    /* border-top-width : px; */
    border-radius: 100%;
    animation-name : loading-animation;
    animation-iteration-count: infinite;
    /* animation-timing-function: ease-in; */
    animation-timing-function: linear;
    position: absolute;
    top: 50%;
    left : 50%;
    transform: translate(-50%, -50%);
}
.loading .circle1{
    width : 50px;
    height : 50px;
    border-top-color: #2143ff;
    animation-duration: 600ms;
    
}
.loading .circle2{
    width : 80px;
    height : 80px;
    border-top-color: #2143ff;
    border-right-color: #2143ff;
    animation-duration: 700ms;
}
.loading .circle3{
    width : 110px;
    height : 110px;
    border-top-color: #2143ff;
    border-bottom-color: #2143ff;
    border-right-color: #2143ff;
    animation-duration: 1000ms;
}
@keyframes loading-animation {
    from{
        transform: translate(-50%, -50%) rotate(0turn);
    }
    to{
        transform: translate(-50%, -50%) rotate(1turn);
    }
}
</style>
