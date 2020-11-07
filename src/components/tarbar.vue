<template>
  <div id="one">
        <router-link to="/homePage" id="two">
        <img src="../assets/img/首页 (1).png" v-if="handles">
        <img src="../assets/img/首页.png" v-else>
        <p>首页</p>
        </router-link>
        <router-link to="/classification" id="two">
        <img src="../assets/img/分类 (1).png" v-if="handles">
        <img src="../assets/img/分类.png" v-else>
        <p>分类</p>
        </router-link>
        <router-link to="/ShoppingCart" id="two">
        <img src="../assets/img/购物车空 (1).png" v-if="handles">
        <img src="../assets/img/购物车空.png" v-else>
        <p>购物车</p>
        </router-link>
        <router-link to="/my" id="two">
        <img src="../assets/img/我 的 (1).png" v-if="handles">
        <img src="../assets/img/我 的.png" v-else>
        <p>我的</p>
        </router-link>
      </div>
</template>

<script>
export default {
  name:"tarbars",
  data:function(){
    return{
    handles:false,
    current:0,
    }
  },
  //点击显示红色，其他不显示红色
}
</script>

<style>
p{
  color: black;
}
</style>