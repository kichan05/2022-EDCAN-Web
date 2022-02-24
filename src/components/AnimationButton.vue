<template>
<div class="animation-button" @click="$emit('btnClick')">
        <button
            class="unSeleted"
            :class="{'isSelete' : buttonData.isSelete}">
                {{ buttonData.title }}
            <transition name="buttonSeleteEffect">
                <div v-if="buttonData.isSelete" class="seleted">{{ buttonData.title }}</div>
            </transition>
        </button>
</div>
</template>

<script>
import ButtonData from "./../Model/ButtonData.js"

export default {
    name : "Animation button",
    props : {
        buttonData : ButtonData
    }
}
</script>

<style scoped>
.animation-button {
    display: inline-block;
}

.animation-button button {
    width : 120px;
    height : 44px;

    border-radius: 30px;

    overflow: hidden;

    font-family: "Work Sans";
    font-size: 25px;
    font-weight: 400;

    background-color: white;

    border: 2px solid black;
    border-radius: 30px;

    position: relative;
}

.animation-button button.isSelete {

}

.seleted {
    width : 300px;
    height : 300px;

    color : white;

    background-color: black;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top : 50%;
    left : 50%;

    transform: translate(-50%, -50%);
}

/* 
.animation-button button:active {
    transform: scale(0.975);
} */

.buttonSeleteEffect-enter-from {
    transform: translate(-50%, -50%) scale(0);
}
.buttonSeleteEffect-enter-active {
    transition: 700ms;
}
.buttonSeleteEffect-enter-to {
    transform: translate(-50%, -50%) scale(1);
}

.buttonSeleteEffect-leave-from {
    opacity: 1;
}
.buttonSeleteEffect-leave-active {
    transition: 200ms;
}
.buttonSeleteEffect-leave-to {
    opacity: 0;
}

</style>