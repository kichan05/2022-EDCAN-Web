<template>
<footer>
    <div class="content">
        <img src="/img/EDCAN_LOGO.svg" alt="EDCAN로고" class="logo logo-rotate-animation" @click="$router.push('easterEgg')">
        <div class="description">
            <div class="description-content">서울 용산구 원효로97길 33-4, 선린인터넷고등학교</div>
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
}

.logo {
    width : 30%;
    min-width: 500px;

    transition: 1500ms;
}

.logo:hover {
    transform: rotateY(1turn) scale(0.9);
}

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
    .logo {
        width : 100%;
        min-width: unset;
        max-width : 500px;
    }

    footer .content {
        flex-direction: column;
        gap : 16px;
    }
}
</style>