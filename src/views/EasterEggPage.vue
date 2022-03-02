<template>
<div class="easterEgg">{{ msg }}</div>
<img src="/img/edcan.svg" alt="">
<span @click="$router.push('console')">?</span>
</template>

<script>
let msg = ""
for(let i = 0; i < 1000; i++){
    msg += "EDCAN은 정말 최고야!! "
}
export default {
    name : "easterEgg",
    data(){return{
        msg
    }}
}
</script>

<style scoped>
.easterEgg{
    width : 100%;
    height : 100%;

    text-align: center;
    overflow: hidden;

    word-break: break-all;
}

img {
    width : 90%;
    max-width : 300px;

    animation-name : logo-animation;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    position: absolute;
    top : 50%;
    left : 50%;

    transform: translate(-50%, -50%);
}


span {
    position: fixed;
    top : 0px;
    right : 0px;

    cursor: pointer;
}

span:hover {
    color : var(-EDCAN1);
}

@keyframes logo-animation {
    0%{
        transform: translate(-50%, -50%) rotate(0turn);
    }

    100%{
        transform: translate(-50%, -50%) rotate(1turn);
    }
}
</style>