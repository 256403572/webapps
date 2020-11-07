<template>
  <div>
    <home>
      <div slot="center" class="center">购物车</div>
    </home>
    <!-- 轮播图 -->
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title" class="three">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    <!--  -->
    <hometime></hometime>
    <featureview></featureview>
    <tabroatol></tabroatol>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import home from '../view/home.vue'
import {gethomemultdata} from '../network/gethomemultdata.js'
import {Swiper, SwiperItem} from '../components/swipt/index.js'
import hometime from '../view/hometime.vue'
import featureview from '../view/featureview.vue'
import tabroatol from '../view/tabroatol.vue'
export default {
  name:"homePage",
  components:{
    home,
    Swiper,
    SwiperItem,
    hometime,
    featureview,
    tabroatol
  },
  data:function(){
    return{
      banner:[],
      recommend:[]
    }
  },
  //axios获取值
  created(){
    gethomemultdata().then(res=>{
      // console.log(res);
      this.banner=res.data.data.banner.list
      this.recommend=res.data.data.recommend.list
    })
  }
}
</script>

<style>
.center{
  text-align: center;
  color: beige;
  font-size: 25px;
}
.three{
  margin-top: 40px;
}
</style>