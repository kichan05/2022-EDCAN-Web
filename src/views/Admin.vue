<template>
<div class="page admin">
    <UploadPortfolio/>
    <PortfolioList/>
</div>
</template>

<script>
import UploadPortfolio from "./../components/Admin/UploadPortfolio.vue"
import PortfolioList from "./../components/Admin/PortfolioList.vue"

export default {
    name : "Admin",
    components : {
        UploadPortfolio,
        PortfolioList,
    }
}
</script>

<style>
.admin .admin-item {
    border : 1px solid #808080;
}
</style>