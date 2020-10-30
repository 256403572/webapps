<template>
  <div id="one">
      <div id="two">
        <router-link to="/homePage">
        <img src="../assets/img/首页 (1).png" v-if="handles">
        <img src="../assets/img/首页.png" v-else>
        <p :class="{colo:handles}">首页</p>
        </router-link>
        </div>
      <div id="two">
        <router-link to="/classification">
       <img src="../assets/img/分类 (1).png" v-if="handles">
       <img src="../assets/img/分类.png" v-else>
        <p :class="{colo:handles}">分类</p>
        </router-link>
        </div>
      <div id="two">
        <router-link to="/ShoppingCart">
        <img src="../assets/img/购物车空 (1).png" v-if="handles">
        <img src="../assets/img/购物车空.png" v-else>
        <p :class="{colo:handles}">购物车</p>
        </router-link>
      </div>
      <div id="two">
        <router-link to="/my">
        <img src="../assets/img/我 的 (1).png" v-if="handles">
        <img src="../assets/img/我 的.png" v-else>
        <p :class="{colo:handles}">我的</p>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name:"tarbars",
  data:function(){
    return{
    handles:false
    }
  },
  //点击显示红色，其他不显示红色
}
</script>

<style>
.colo{
  color: red;
}
p{
  color: black;
}
</style>