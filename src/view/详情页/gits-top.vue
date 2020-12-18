<template>
  <div class="mults">
    <img src="../../assets/img/左箭头.png" class="arrow" @click="arrows">
    <div v-for="(item,index) in itre" :key="item" class="gitstop" @click="falt(index)" :class="{tare:gitsindex==index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"gitstop",
  components:{
  },
  data() {
    return {
      itre:['商品','参数','评论','推荐'],
      gitsindex:0
    }
  },
  methods:{
    falt:function(index){
      this.gitsindex=index;
      this.$emit('temptop',index)
    },
    arrows(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.mults{
  display:flex;
  text-align: center;
  background-color:#FFFFFF;
  height: 35px;
  font-size: 16px;
  padding-top: 40px;
  position:fixed;
  z-index: 1;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
}
.gitstop{
  flex: 1;
  margin-left: 20px;
  margin-top: 5px;
}
.tare{
  color: red;
}
.arrow{
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-top: 5px;
}
</style>