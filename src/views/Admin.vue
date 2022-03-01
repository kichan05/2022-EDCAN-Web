<template>
<div class="page admin">
    <UploadPortfolio/>
</div>
</template>

<script>
import UploadPortfolio from "./../components/Admin/UploadPortfolio.vue"

export default {
    name : "Admin",
    components : {
        UploadPortfolio
    }
}
</script>

<style>
.admin .admin-item {
    border : 1px solid #808080;
}
</style>