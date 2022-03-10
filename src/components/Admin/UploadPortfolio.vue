<template>
<div class="admin-item upload-portfolio">
    <Loading  v-if="isLoading" />
    <div class="input-wrap">
        <label>제목 : <input type="text" v-model="inputTitle"></label>
        <label>설명 : <textarea v-model="inputDescription" cols="30" rows="10"></textarea> </label>
        <div class="choice-unit-wrap">
            유닛 선택 : 
            <label><input type="radio" v-model="checkedUnit" value="Atelier" name="choiceUnit" checked> Atelier </label>
            <label><input type="radio" v-model="checkedUnit" value="Pixel" name="choiceUnit"> Pixel </label>
            <label><input type="radio" v-model="checkedUnit" value="Atelier & Pixel" name="choiceUnit"> Atelier & Pixel </label>
        </div>
        <label>이미지 : <input type="file" @change="seleteImg"></label>

    </div>
    <img :src="choiceImgUrl" class="ex-img">
    <button @click="upload">업로드</button>
</div>
</template>

<script>
import Loading from "./../Loading.vue"

import { storage, db } from "./../../assets/firebase.js"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from '@firebase/firestore'

export default {
    name : "Upload portfolio",
    data(){return{
        isLoading : false,
        inputTitle : "",
        inputDescription : "",
        checkedUnit : "Atelier",
        choiceImg : "",
        choiceImgUrl : "",
    }},
    components : {
        Loading
    },
    methods : {
        seleteImg(e){
            this.choiceImg = e.target.files[0]
            this.choiceImgUrl = URL.createObjectURL(this.choiceImg);
        },
        async upload(){
            if(!this.inputTitle){
                alert("Title을 입력하세요")
                return
            }
            if(!this.inputDescription){
                alert("Description을 입력하세요")
                return
            }
            if(!this.choiceImgUrl){
                alert("이미지를 선택하세요")
                return
            }

            this.isLoading = true;

            const imgRef = ref(storage, `portfolio/${this.inputTitle}.png`)
            uploadBytes(imgRef, this.choiceImg).then(()=>{
                getDownloadURL(imgRef).then(url => {
                    setDoc(doc(db, "portfolio", this.inputTitle), {
                        title : this.inputTitle,
                        description : this.inputDescription,
                        unit : this.checkedUnit,
                        img : url
                    }).then(()=>{
                        this.isLoading = false;

                        this.inputTitle = ""
                        this.inputDescription = ""
                        this.checkedUnit = ""
                        this.choiceImg = ""
                        this.choiceImgUrl = ""

                        this.$store.dispatch("getAllPortfolio")
                    })
                    .catch(()=>{
                        alert("Firestore 업로드에 실패했습니다.")
                    })
                })
            })
            .catch(()=>{
                alert("Storage 업로드에 실패했습니다.")
            })
        }
    }
}
</script>

<style scoped>
.upload-portfolio {
    position: relative;
}

.input-wrap {
    display: flex;
    flex-direction: column;
}

.ex-img {
    width : 50%;
}
</style>