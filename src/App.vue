<template>
  <router-view>

  </router-view>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  mounted(){
    this.$store.dispatch("getAllPortfolio")
  }
}
</script>

<style>
@import "./assets/style/main.css";
</style>
