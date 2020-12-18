<template>
    <div class="shopp">
        <div class="customer">
          <img src="../../assets/img/客服.png" alt="">
          <p>客服</p>
          </div>
        <div class="store">
          <img src="../../assets/img/店铺.png" alt="">
          <p>店铺</p>
          </div>
        <div class="Collection">
          <img src="../../assets/img/收 藏.png" alt="">
          <p>收藏</p>
          </div>
        <div class="join" @click="join">加入购物车</div>
        <div class="purchase">购买</div>
      </div>
</template>

<script>
export default {
  name:'shopp',
  methods:{
    join(){
      this.$emit('count');
    }
  }
}
</script>

<style scoped>
.shopp{
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 60px;
  background-color:#fff;
}
.customer img,.Collection img,.store img{
  width: 30px;
  height: 30px;
}
.join{
  width: 110px;
  background-color:gold;
  text-align: center;
  font-family: '黑体';
  font-size: 20px;
  line-height: 60px;
}
.purchase{
  width: 88px;
  background-color:hotpink;
  text-align: center;
  font-family: '黑体';
  color: #fff;
  font-size: 20px;
  line-height: 60px;
}
.Collection,.customer,.store,.join{
  margin-left: 20px;
}
</style>