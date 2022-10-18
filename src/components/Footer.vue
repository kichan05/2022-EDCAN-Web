<template>
<footer>
    <div class="content">
        <img src="/img/EDCAN_LOGO.svg" alt="EDCAN로고" class="logo">
        <div class="description">
            <div class="description-content"><span @click="$router.push('easterEgg')">서</span>울 용산구 원효로97길 33-4, 선린인터넷고등학교</div>
            <div class="description-content">Copyright ©EDCAN. All rights reserved.</div>
        </div>
    </div>
</footer>
</template>


<script>
export default {
    name : "Footer"
}
</script>

<style scoped>
footer {
    border-top : 1px solid var(--gray3);
}

footer .content {
    min-height: unset;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding-top: 40px;
    padding-bottom: 40px;
}

.logo {
    width : 250px;
}

/* 
.logo:hover {
    transform: rotateY(1turn) scale(0.9);
} */

@keyframes ani {
    0% {
        transform: rotateY(0turn);
    }
    0% {
        transform: rotateY(0turn);
    }
}

.description {
    text-align: center;
}

@media (max-width : 1000px) {
    footer .content {
        flex-direction: column;
        gap : 24px;
    }
}
</style>