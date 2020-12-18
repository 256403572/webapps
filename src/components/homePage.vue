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
    <!-- <tabroatol></tabroatol> -->
    <div class="tabar">
    <div v-for="(item,index) in title" :key="item.index" class="tatal" :class="{tale:index==currentindex}" 
    @click="handles(index)">
      <span>{{item}}</span>
    </div>
  </div>
    <gethubles  :gets="gets[currdex].list"></gethubles>
    <!-- <div class="hale">
    <div v-for="item in gets[currdex].list" :key="item.acm" class="git-three" @click="page"> -->
      <!-- <p>{{item}}</p> -->
      <!-- <img :src="item.show.img" alt="">
      <div class="git-ate">{{item.title}}</div>
      <div class="git-two">
      <span class="git-one">{{item.price}}</span>
      <span>☆</span>
      <span>{{item.cfav}}</span>
      </div>
    </div>
    </div> -->
    <gittop></gittop>
     <!-- <div class="git-top" @click="back">
    <img src="../assets/img/back-top.png" alt="">
  </div> -->
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
    </ul>
  </div>
</template>

<script>
import home from '../view/home.vue'
import {gethomemultdata} from '../network/gethomemultdata.js'
import {Swiper, SwiperItem} from '../components/swipt/index.js'
import hometime from '../view/hometime.vue'
import featureview from '../view/featureview.vue'
// import tabroatol from '../view/tabroatol.vue'
import gethubles from '../view/gethubles.vue'
import {gethuble} from '../network/gethomemultdata'
// import scroll from '../view/scroll.vue'
import gittop from '../view/git-top.vue'
export default {
  name:"homePage",
  // props:{
  //   get:{
  //     type:Object,
  //     default(){
  //       return{}
  //     }
  //   }
  // },
  components:{
    home,
    Swiper,
    SwiperItem,
    hometime,
    featureview,
    gittop,
    // Scroll,
    // tabroatol,
    gethubles
  },
  data:function(){
    return{
      banner:[],
      recommend:[],
      title:['流行','新款','精选'],
      currentindex:0,
      gets:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currdex:"pop",
    }
  },
    methods:{
    handles:function(index){
      this.currentindex=index
       switch(index){
        case 0:
          this.currdex="pop"
          break;
        case 1:
          this.currdex="new"
          break;
        case 2:
          this.currdex="sell"
          break;
      }
    },
     gethuble(type){ 
      const page=this.gets[type].page+1
      gethuble(type,page).then(res=>{
      this.gets[type].list.push(...res.data.data.list)
      console.log(this.gets[type].list);
      this.gets[type].page+=1
    })
  },
  page(index){
    // console.log(this.gets['pop'].list[1].iid);
    // this.$router.push('/pages/'+this.$route.query.idd);
  },
  },
  //axios获取值
  created(){
    gethomemultdata().then(res=>{
      // console.log(res);
      this.banner=res.data.data.banner.list
      this.recommend=res.data.data.recommend.list
    })
    this.gethuble('pop')
    this.gethuble('new')
    this.gethuble('sell')
  },
}
</script>

<style scoped>
@import '../assets/css/css.css';
</style>