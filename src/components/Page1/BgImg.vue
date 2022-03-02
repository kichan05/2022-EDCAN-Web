<template>
<transition name="bg-img-des">
    <div
        class="bg-img"
        v-if="isShow"
        :style="{backgroundImage : `url('/img/main_page_bg/bg_${n}.jpg')`}"></div>
</transition>
</template>

<script>
export default {
    name : "Bg img",
    props : {
        n : Number,
        isShow : Boolean,
    }
}
</script>

<style scoped>
.bg-img {
    width : 100%;
    height : 100%;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    position: absolute;
    z-index: -1;

    transition: 500ms;
}

.bg-img-des-enter-from {
    opacity: 0;
}

.bg-img-des-enter-active {
    transition: 1500ms;
}

.bg-img-des-enter-to {
    opacity: 1;
}

.bg-img-des-leave-from {
    opacity: 1;
}

.bg-img-des-leave-active {
    transition: 1500ms;
}

.bg-img-des-leave-to {
    opacity: 0;
}

</style>