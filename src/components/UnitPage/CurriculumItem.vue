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
    gap : 12px;

    transition: 250ms;
}

.curriculum-item.px {
    background: #F39592;
    color: #412727;
}

.curriculum-item.at {
    background: #829CE0;
    color : #1b1c3c;
}

.curriculum-item.px:hover {
    background: #f5807c;
    transform: scale(1.015);
    /* box-shadow: 6px 6px 0px #f5807c; */
}

.curriculum-item.at:hover {
    background: #5e81d8;
    transform: scale(1.015);
    /* box-shadow: 3px 3px 3px #5e81d8; */
}


h3 {
    font-size: 20px;
    font-weight: bold;

    color: #FFFFFF;
}

p {
    font-size: 18px;
    line-height: 25px;
}

</style>