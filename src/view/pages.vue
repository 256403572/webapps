<template>
  <div class="moves">
    <!-- <gitstop @temptop="temptop"></gitstop> -->
    <div class="mults">
    <img src="../assets/img/左箭头.png" class="arrow" @click="arrows">
    <div v-for="(item,index) in itre" :key="item" class="gitstop" @click="falt(index)" :class="{tare:gitsindex==index}">
      <span>{{item}}</span>
    </div>
  </div>
    <!-- <vest></vest> -->
    <div class="fotu">
    <swiper>
      <swiper-item v-for="item in imger" :key="item" class="ones">
        <img :src="item">
      </swiper-item>
    </swiper>
    </div>
      <h3>{{text}}</h3>
      <div class="four">
      <span class="price">{{price}}</span>
      <span class="original">{{original}}</span>
      <span class="activity">{{Activity}}</span>
      </div>
      <div class="dates">
      <div v-for="item in columns" :key="item" class="columns">
        <p>{{item}}</p>
      </div>
      </div>
      <div class="five">
        <hr/>
      </div>
      <div class="deta">
      <div v-for="item in detailInfo" :key="item.name" class="detailInfo">
        <img :src="item.icon">
        <span>{{item.name}}</span>
      </div>
      </div>
      <div class="five">
        <hr/>
      </div>
      <div class="eight">
          <img :src="shopLogo" alt="">
          <span>{{name}}</span>
      </div>
      <div class="thirteen">
      <div class="ten">
        <div class="csells">
          <div>{{cSells}}</div>
          <div>总销量</div>
          </div>
        <div class="csells">
          <div>{{cGoods}}</div>
          <div>全部宝贝</div>
        </div>
        <div class="eleven"></div>
        </div>
        <div class="twelve">
        <ul v-for="item in score" :key="item.name">
          <li>
            <span>{{item.name}}</span>
            <span :class="{barses:item.isBetter='true'}">
            <span class="scores">{{item.score}}</span>
            <span class="isbetter">
            <span v-if="item.isBetter='true'">低</span>
            <span v-else-if="item.isBetter='fase'">高</span>
            </span>
            </span>
          </li>
        </ul>
      </div>
      </div>
       <div class="serve">
        <p>进店逛逛</p>
      </div>
      <div class="detailinfo"></div>
      <div class="desc">
        <div class="detailImages"></div>
        <p>{{desc}}</p>
        <div class="detailImageone"></div>
      </div>
      <div class="left" v-for="item in detailImage" :key="item">
        <img :src="item">
      </div>
      <div class="tables">
        <table>
          <tr v-for="item in tables" :key="item[0]">
            <td>{{item[0]}}</td>
            <td>{{item[1]}}</td>
            <td>{{item[2]}}</td>
            <td>{{item[3]}}</td>
          </tr>
        </table>
      </div>
      <div class="set">
        <table>
          <tr v-for="item in set" :key="item.key">
            <td class="setss">{{item.key}}</td>
            <td class="sets">{{item.value}}</td>
          </tr>
        </table>
      </div>
    <div class="comment-info-wrap">
			<span class="comment-info-left">用户评价</span>
			<span class="comment-info-flex">更多</span>
		</div>
			<div class="comment-user-info">
				<span>
          <!-- <img :src="avatar" class="avatar"> -->
        <img v-lazy="avatar" class="avatar">
				<span class="uname">{{uname}}</span>
				</span>
			</div>
			<div class="comment-text">{{content}}</div>
			<div class="comment-goods-info">
				<span class="comment-time">{{created}}</span>
				<span class="style">{{style}}</span>
			</div>
			<div class="flex">
				<div class="comment-info-images" v-for="item in images" :key="item">
					<img :src="item">
          <!-- <img v-lazy="item"> -->
				</div>
			</div>
      <div class="line"></div>
      <recommend></recommend>
      <shopp @count="counts"></shopp>
      <total></total>
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
      </ul>
  </div>
</template>

<script>
import {gitttop} from "../network/indexs.js";
// import gitstop from "./详情页/gits-top.vue";
import Swiper from '../components/swipt/swiper'
import SwiperItem from '../components/swipt/swiperltem'
// import vest from './详情页/vest.vue'
import recommend from '../view/详情页/recommend.vue'
import shopp from '../view/详情页/shopp.vue'
import Total from '../components/total/toast.vue'
// import {mapActions} from 'vuex'
export default {
  name: "pages",
  data() {
    return {
      itre:['商品','参数','评论','推荐'],
      gitsindex:0,
      imger:[],
      text:[],
      desc:'',
      lowPrice:'',
      price:[],
      original:[],
      Activity:[],
      columns:[],
      detailInfo:[],
      shopLogo:[],
      name:'',
      cGoods:'',
      cSells:'',
      score:[],
      detailImage:[],
      tables:[],
      set:[],
      cRate:'',
      avatar:'',
      uname:'',
      content:'',
      created:'',
      commentInfo:[],
      style:'',
      images:[],
      createds:'',
      idd:null,
      // currentIndex:0,
      themeTopY: [0,1000,2000,3000]
    }
  },
  components: {
    // gitstop,
    Swiper,
    SwiperItem,
    recommend,
    shopp,
    Total
    // scroll
    // Scroll
    // vest
  },
  created() {
    this.iid=this.$route.params.iid
    // console.log(this.idd);
    gitttop(this.iid).then(res=>{
         console.log(res);
        this.imger=res.data.result.itemInfo.topImages
        this.text=res.data.result.itemInfo.title
        this.desc=res.data.result.itemInfo.desc
        this.lowPrice=res.data.result.itemInfo.lowPrice
        this.price=res.data.result.itemInfo.price
        this.original=res.data.result.itemInfo.oldPrice
        this.Activity=res.data.result.itemInfo.discountDesc
        this.columns=res.data.result.columns
        this.detailInfo=res.data.result.shopInfo.services
        this.shopLogo=res.data.result.shopInfo.shopLogo 
        this.name=res.data.result.shopInfo.name
        this.cGoods=res.data.result.shopInfo.cGoods
        this.cSells=parseInt((res.data.result.shopInfo.cSells)/10000)+"万"
        this.score=res.data.result.shopInfo.score
        this.desc=res.data.result.detailInfo.desc
        this.detailImage=res.data.result.detailInfo.detailImage[0].list
        this.tables=res.data.result.itemParams.rule.tables[0]
        console.log(this.tables);
        this.set=res.data.result.itemParams.info.set
        this.cRate=res.data.result.rate.cRate
        if (this.cRate!==0) {
          this.commentInfo=res.data.result.rate.list[0]
          this.avatar=res.data.result.rate.list[0].user.avatar;
          this.uname=res.data.result.rate.list[0].user.uname;
          this.content=res.data.result.rate.list[0].content
          this.createds=res.data.result.rate.list[0].created
          const data=new Date(this.createds*1000);
          console.log(data);
          const date=data.getFullYear();
          const math=data.getMonth();
          const day=data.getDay();
          const year=date+'年'+math+'月'+day+'日'
          this.created=year
          this.style=res.data.result.rate.list[0].style
          this.images=res.data.result.rate.list[0].images
          console.log(this.avatar);
        }
        // console.log(this.set);
        // console.log(this.tables);
        // console.log(this.detailImage);
        // console.log(this.desc);
        // console.log(this.shopLogo);
        // console.log(this.detailInfo);
        // console.log(this.text);
        // console.log(this.imger);
    })
  },
  methods: {
    // ...mapActions(['multion']),
  falt:function(index){
      this.gitsindex=index;
      // this.$emit(temptop,index)
},
// temptop(index){
//   this.$refs.scroll.scrollTo(0,-this.themeTopY[index],200)
// },
 arrows:function(){
      this.$router.go(-1);
    },
  counts(){
    //获取商品购物车信息
    let vest={}
    vest.img=this.imger[0];
    vest.titles=this.text;
    vest.prices=this.lowPrice;
    vest.desc=this.desc;
    vest.iid=this.iid;
    vest.checked=true;
    console.log(vest);
    // this.multion(vest).then(res=>{
    //   console.log(this.$toast);
    //   this.$toast.show(res,2000);
    // })
    //添加到购物车
    // this.$store.commit('multions',vest)
    this.$store.dispatch('multion',vest).then(res=>{
      console.log(res);
      // console.log(this.$toast);
      // this.$toast.show(res,2000);
    })
  }
}
}
</script>

<style scoped>
@import '../assets/css/aster.css';
.moves{
  position: relative;
  z-index:1;
  background-color: #fff;
}
</style>