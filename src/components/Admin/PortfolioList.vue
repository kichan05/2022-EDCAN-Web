<template>
<div class="admin-item portfolio-list">
    <div class="portfolio-list-wrap">
        <div
            v-for="(i, n) in portfolioList" :key="n"
            class="portfolio-list-item">
            <img :src="i.img" :alt="`포트폴리오 리스트 이미지 ${n}`">
            <div class="portfolio-data">
                <h4>{{ i.title }}</h4>
                <p>{{ i.description }}</p>
            </div>
            <div class="buttons-wrap">
                <button class="delete-pr" @click="(event)=>{deletePortfolio(event, n)}">수정</button>
                <button class="edit-pr" @click="(event)=>{editPortfolio(event, n)}">삭제</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { db } from "./../../assets/firebase.js"

import { mapState } from 'vuex'
import { deleteDoc, doc } from '@firebase/firestore';


export default {
    name : "Portflio List",
    components : {

    },
    methods : {
        deletePortfolio(e, n){
            e; n
            alert(n + "아직 구현되지 않은 기능입니다.")
        },
        async editPortfolio(e, n){
            e;
            const realDele = confirm(`${this.portfolioList[n].title}을 정말 삭제하시겠습니까?`)
            if(!realDele) return

            await deleteDoc(doc(db, "portfolio", this.portfolioList[n].title))
            this.portfolioList.splice(n, 1)
            alert("삭제되었습니다.")
        }
    },
    computed : {
        ...mapState(["portfolioList"])
    }
}
</script>

<style scoped>
.portfolio-list {
    width: 100%;
    max-width: 1000px;

    margin: 0 auto;
}

.portfolio-list-item {
    border-bottom: 1px solid var(--gray3);

    padding : 16px;

    display: flex;
    gap : 16px;
}

.portfolio-list-item:hover {
    background-color: var(--gray1);
}

.portfolio-list-item img {
    width : 30%;
}

.portfolio-list-item .portfolio-data {
    flex : 1;

    display: flex;
    flex-direction: column;
}

.portfolio-list-item .buttons-wrap {
    flex : 0.2;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.portfolio-list-item .buttons-wrap button {
    color : white;

    font-size: 15px;
    
    border-radius: 0.5rem;

    padding : 12px 0;
}

.portfolio-list-item .buttons-wrap .delete-pr {
    background-color: var(--flat-green);
    border : 2px solid green;
}

.portfolio-list-item .buttons-wrap .edit-pr {
    background-color : var(--flat-red);
    border : 2px solid red;
}
</style>