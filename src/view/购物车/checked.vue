<template>
  <div class="active" :class="{check:ischeck}" @click="ischecks">
    <img src="../../assets/img/detail/多选-选择 (1).png" alt="">
  </div>
</template>

<script>
export default {  
  name:"checked",
  props:{
    ischeck:{
      type:Boolean,
      default:false
  },
  },
  methods:{
    ischecks(){
      this.$emit('mains');
    }
  },
}
</script>

<style scoped>
.active img{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: red;
}
.active{
  position:absolute;
  left: 0;
}
</style>