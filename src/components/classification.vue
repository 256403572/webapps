<template>
  <div>
    <home>
      <div slot="center" class="center">商品分类</div>
    </home>
    <div class="link">
    <div class="title">
      <div v-for="(item,index) in titles" :key="item.acm" class="popular" :class="{tabs:currindex===index}" @click="hands(index)">
      {{item.title}}
      </div>
    </div>
    <div class="fourss">
    <div class="images" v-for="item in link" :key="item.link">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
      </a>
    </div>
</div>
    </div>
    <div class="products">
    <div class="product" v-for="(item,index) in comprehensive" :key="item" :class="{date:currend===index}" @click="code(index)">
    <span>{{item}}</span>
    </div>
    </div>
    <!-- <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail> -->
    <div class="border">
    <div v-for="item in lists" :key="item.acm" class="borders">
      <a :href="item.link">
        <img v-lazy="item.img" alt="">
        <p class="tite">{{item.title}}</p>
        <p class="tites">
          <span class="orgPrice">￥{{item.orgPrice}}</span>
          <span>☆</span>
          <span>{{item.cfav}}</span>
        </p>
        </a>
    </div>
    </div>
    <ul>
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
// import scroll from '../view/scroll.vue'
import home from '../view/home.vue'
import {category} from '../network/gethomemultdata.js'
// import categorys from '../view/分类/categorys.vue'
import {mait} from '../network/gethomemultdata.js'
import {subcategory} from '../network/gethomemultdata.js'
// import tabContentDetaill from '../view/分类/tabContentDetail.vue'
export default {
  name:"classification",
  components:{
    home,
    // tabContentDetail
    // categorys
  },
  data() {
    return {
      titles:[],
      meky:'',
      currindex:0,
      link:[],
      comprehensive:['综合','新品','销量'],
      currend:0,
      dite:[],
      lists:[],
      codes:"pop"
    }
  },
  created(){
    this.category();
  },
  methods:{
    hands(index){
      this.currindex=index
      this.meky=this.titles[this.currindex].maitKey
      console.log(this.meky);
      mait(this.meky).then(res=>{
        this.link=res.data.data.list
        console.log(this.link.length);
        for (let i = 0; i <=this.link.length; i++) {
          console.log(this.titles[i].miniWallkey);
          this.dite=this.titles[i].miniWallkey
          subcategory(this.dite,"pop").then(res=>{
            console.log(res);
            this.lists=res.data
            console.log(this.lists);
          })
        }
      })
    },
    category(){
      category().then(res=>{
      console.log(res);
      this.titles=res.data.data.category.list;
    })
    },
    code(index){
      this.currend=index
      // switch (index) {
      //   case 0:
      //     this.codes="pop"
      //     break;
      //   case 1:
      //     this.codes="new"
      //   case 2:
      //     this.codes="sell"
      // }
    }
  }
}
</script>

<style scoped>
.center{
  color: #ffffff;
  font-size: 20px;
}
.imger{
  margin-top: 60px;
  margin-left: 15px;
}
.tabs{
  background-color: #ffffff;
  color: red;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.popular{
  text-align: center;
  margin-top: 20px;
}
.title{
  margin-top: 40px;
  width: 30%;
  background-color: #DCDCDC;
  height: 850px;
}
a{
  text-decoration: none;
}
.images img{
  width: 80px;
  height: 80px;
}
.images p{
  text-align: center;
}
.images{
  width: 80px;
}
.link{
  display: flex;
}
.fourss{
  margin-left: 15px;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 70%;
}
.products{
  line-height: 300px;
  display: flex;
  margin-left: 120px;
  margin-top: -120px;
}
.product{
  flex: 1;
}
.date{
  color: red;
}
.date span{
  border-bottom: 4px solid red;
} 
.border{
  margin-top: -120px;
  margin-left: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.borders{
  width: 45%;
}
.borders img{
  height:120px;
}
.borders .tite{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.borders .tites{
  text-align: center;
}
.borders .tites .orgPrice{
  color: red;
}
</style>