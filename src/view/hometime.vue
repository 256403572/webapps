<template>
<div>
<div class="view">
<div class="home-view" v-for="item in recommend" :key="item.title">
  <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </a>
</div>
</div>
<div class="two"></div>
</div>
</template>

<script>
import {gethomemultdata} from '../network/gethomemultdata.js'
export default {
  name:'hometime',
  data:function(){
    return{
      recommend:[]
    }
  },
created(){
    gethomemultdata().then(res=>{
      // console.log(res);
      this.recommend=res.data.data.recommend.list
      // console.log(this.recommend);
    })
  }
}
</script>

<style>
.view{
  display: flex;
  width: 100%;
  margin-top: 20px;
}
.home-view{
  flex: 1;
  text-align: center;
}
.home-view img{
  width: 65px;
  height: 65px;
}
.home-view a{
   text-decoration: none;
}
.two{
  height: 10px;
  width: 100%;
  margin-top: 20px;
  background-color:darkgrey;
}
</style> 