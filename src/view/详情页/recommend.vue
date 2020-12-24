<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="text">
      <!-- <img :src="item.image" alt=""> -->
      <img v-lazy="item.image" alt="">
      <div class="title">{{item.title}}</div>
      <div class="discount">
        <span class="discountPrice">{{item.discountPrice}}</span>
        <span class="cfav">
        <span class="star">☆</span>
        <span>{{item.cfav}}</span>
        </span>
        </div>
    </div>
  </div>
</template>

<script>
import {recommend} from '../../network/gethomemultdata.js'
export default {
  name:'recommend',
  data() {
    return {
      recommends:[]
    }
  },
  created(){
    recommend().then(res=>{
      this.recommends=res.data.data.list
      console.log(this.recommends);
    })
  }
}
</script>

<style>
.discount{
  text-align: center;
}
.discountPrice{
  color: red;
}
.title{
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
}
.recommend{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.text{
  width: 48%;
}
.star{
  font-size: 21px;
  font-family: '黑体';
}
.cfav{
  margin-left: 10px;
}
</style>
