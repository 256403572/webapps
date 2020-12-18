<template>
  <div class="sade">
    <div class="checkboxs">
      <checked @mains="main" :ischeck="math"></checked>
    </div>
    <span class="select">全选</span>
    <div class="total"><p>合计:￥{{total}}</p></div>
    <div class="list">去计算({{balance}})</div>
  </div>
</template>

<script>
import checked from '../购物车/checked.vue'
export default {
  name:"checkbox",
  components:{
    checked
  },
  computed:{
    //合计
    total(){
      return this.$store.state.list.filter(item=>{
        return item.checked
      }).reduce((pracevalue,item) => {
        return pracevalue + item.count*item.prices
      },0).toFixed(2)
    },
    //计算值（选中多少商品）
    balance(){
      return this.$store.state.list.filter(item=>item.checked).length
  },
  math:{
    //判断math为true还是false !0为true ！大于0为false
    get(){
    return !(this.$store.state.list.filter(item=>!item.checked).length);
    },
  }
},
methods:{
  main(){
    if (this.math) {
      this.$store.state.list.forEach(item=>item.checked=false);
    }
    else{
      this.$store.state.list.forEach(item=>item.checked=true);
    }
  }
}
}
</script>

<style scoped>
.sade{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 40px;
  display: flex;
  border: 1px solid grey;
  background-color: gray;
  height: 30px;
}
.list{
  width: 95px;
  height: 30px;
  border: 1px solid red;
  background-color: red;
  color: aliceblue;
  position: fixed;
  right: 0;
  text-align: center;
}
.checkboxs{
  margin-top: 4px;
  background-color: #ffffff;
  border-radius: 50%;
  width: 25px;
}
.total{
  margin-top: 6px;
  margin-left: 20px;
}
.boxs{
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
.select{
  margin-top: 6px;
  margin-left: 6px;
}
.total p{
    font-size: 16px;
}
</style>