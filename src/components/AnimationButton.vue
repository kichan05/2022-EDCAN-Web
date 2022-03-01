<template>
<div class="animation-button" @click="$emit('btnClick')">
        <button
            class="unSeleted"
            :class="{'isSelete' : buttonData.isSelete,
            'All' : buttonData.title == 'All',
            'Atelier' : buttonData.title == 'Atelier',
            'Pixel' : buttonData.title == 'Pixel'}">
                {{ buttonData.title }}
                <transition name="buttonSeleteEffect">
                    <div
                        v-if="buttonData.isSelete"
                        class="seleted"
                        :style="{'backgroundColor' : buttonData.color}"
                            >{{ buttonData.title }}</div>
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

    background-color: white;

    border: 2px solid;
    border-radius: 30px;

    position: relative;

    transition: background-color 200ms;
}

.animation-button button.isSelete {
    transition-timing-function: steps(1, end);
}

/* .animation-button button.Atelier {
    color : var(--Atelier1);
    border : 2px solid var(--Atelier1);
}
.animation-button button.Pixel {
    color : var(--Pixel1);
    border : 2px solid var(--Pixel1);
} */
.animation-button button.isSelete.All {
    background-color: #000;
}
.animation-button button.isSelete.Atelier {
    background-color: var(--Atelier1);
    border : 2px solid var(--Atelier1);
}
.animation-button button.isSelete.Pixel {
    background-color: var(--Pixel1);
    border : 2px solid var(--Pixel1);
}

.seleted {
    width : 120px;
    height : 44px;

    color : white;

    border-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top : 50%;
    left : 50%;
    z-index: 1;

    transform: translate(-50%, -50%);
}

.button-bg {
    
}

/* 
.animation-button button:active {
    transform: scale(0.975);
} */

.buttonSeleteEffect-enter-from {
    transform: translate(-50%, -50%) scale(0);
}
.buttonSeleteEffect-enter-active {
    transition: 250ms;
}
.buttonSeleteEffect-enter-to {
    transform: translate(-50%, -50%) scale(1);
}

.buttonSeleteEffect-leave-from {
    opacity: 1;
}
.buttonSeleteEffect-leave-active {
    transition: 500ms;
}
.buttonSeleteEffect-leave-to {
    opacity: 0;
}

@media (max-width : 900px) {
    .animation-button button {
        width : 90px;
        height : 35px;

        font-size: 18px;
    }
    .seleted {
        width : 90px;
        height : 35px;

        font-size: 18px;
    }
}

</style>