<template>
<div class="gets">
    <!-- <div v-for="item in gets[currdex].list" :key="item.acm" class="git-three" @click="pagess"> -->
      <!-- <p>{{item}}</p> -->
      <!-- <img :src="item.show.img" alt="">
      <div class="git-ate">{{item.title}}</div>
      <div class="git-two">
      <span class="git-one">{{item.price}}</span>
      <span>☆</span>
      <span>{{item.cfav}}</span>
      </div>
    </div> -->
    <goodlist v-for="item in gets" :key="item.acm" :goodlists="item"></goodlist>
</div>
</template>

<script>
// import {gethuble} from '../network/gethomemultdata'
import goodlist from '../view/goodlist.vue'
export default {
  name:'gethubles',
  components:{
    goodlist
  },
  props:{
    gets:{
      type:Array,
      default(){
        return{}
      }
    }
  },
  // data() {
  //   return {
  //     gets:{
  //       pop:{page:0,list:[]},
  //       new:{page:0,list:[]},
  //       sell:{page:0,list:[]}
  //     },
  //     currdex:"pop"
  //   }
  // },
  // created(){
  //   // gethuble('pop',1).then(res=>{
  //   //   console.log(res);
  //   // })
  //   this.gethuble('pop')
  //   this.gethuble('new')
  //   this.gethuble('sell')
  // },
// methods:{
//   gethuble(type){
//       const page=this.gets[type].page+1
//       gethuble(type,page).then(res=>{
//       this.gets[type].list.push(...res.data.data.list)
//       console.log(this.gets[type].list);
//       this.gets[type].page+=1
//     })
//   },
//   pagess(){
//     console.log(this.gethubles.idd);
//     this.$router.push('/pages/'+this.gethubles.idd)
//   }
// pagess(){
//   console.log('--------');
// }
// }
}
</script>
<style>
/* .git-ate{
  text-align: center;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.git-one{
  color: red;
}
.git-two{
  text-align: center;
  font-size: 16px;
}
.git-three img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.git-three{
  width: 48%;
  padding-bottom: 44px;
}
.hale{
  display:flex;
  /* 当超过这个宽度进行跳转 */
  /* flex-wrap: wrap;
  /* 两边对称 */
  /* justify-content:space-around;
} */ 
</style>