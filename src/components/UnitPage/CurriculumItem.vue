<template>
<div class="curriculum-item" :class="{'px' : unit == 'px', 'at' : unit == 'at'}">
    <h3>{{ curriclumData.title }}</h3>
    <p>{{ curriclumData.comment }}</p>
</div>
</template>

<script>
export default {
    name : "Curriculum item",
    props : {
        curriclumData : Object,
        unit : String,
    },
    // created(){
    //     alert(this.curriclumData.title)
    // }
}
</script>

<style scoped>
.curriculum-item {
    border-radius: 15px;

    padding : 30px 25px;
    
    display: flex;
    flex-direction: column;
    gap : 20px;
}

.curriculum-item.px {
    background: #F39592;
}

.curriculum-item.at {
    background: #829CE0;
}

h3 {
    font-size: 18px;
    font-weight: bold;

    color: #FFFFFF;
}

p {
    font-size: 20px;
    line-height: 25px;
    color: #713636;
}

.curriculum-item.at p {
    color : #363871;
}

</style>