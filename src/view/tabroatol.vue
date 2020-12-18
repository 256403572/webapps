<template>
  <div class="tabar">
    <div v-for="(item,index) in title" :key="item.index" class="tatal" :class="{tale:index==currentindex}" 
    @click="handles(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:"tabroatol",
  components:{
    // gethubles
  },
  data:function(){
    return{
      title:['流行','新款','精选'],
      currentindex:0
    }
  },
  methods:{
    handles:function(index){
      this.currentindex=index
       switch(index){
        case 0:
          console.log('0');
        case 1:
          console.log('1');
        case 2:
          console.log('3');
      }
    }
  }
}
</script>

<style>
.tabar{
  display:flex;
  font-size: 18px;
  width: 100%;
  height:28px;
  text-align: center;
  /* 使页面移动时到一定位置时固定 */
  position:sticky;
  /* 设置头部距离 */
  top: 44px;
  background-color:#ffffff;
}
.tatal{
  flex: 1;
  text-align: center;
}
.tale{
  color: brown;
}
.tale span{
  border-bottom: 3px solid brown;
}
</style>