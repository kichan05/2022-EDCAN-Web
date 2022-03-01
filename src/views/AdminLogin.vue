<template>
<div class="page admin-login">
    <h1>관리자 로그인</h1>
    <input type="text" v-model="inputPassword">
    <button @click="loginClick">로그인</button>
    <div v-if="failedCount" class="faild-msg">로그인에 실패하셨습니다. 5회 실패시 IP접속을 방지합니다. {{ failedCount }} / 5</div>
</div>
</template>

<script>
export default {
    name : "admin login",
    data(){return{
        failedCount : 0,
        inputPassword : "",
    }},
    methods : {
        loginClick(){
            this.$store.commit("adminLogin", this.inputPassword)

            if (this.$store.state.isAdmin) {
                this.$router.push("console")
            }
            else {
                this.failedCount++
            }

        }
    }
}
</script>

<style scoped>
.faild-msg {
    color : red;
}
</style>