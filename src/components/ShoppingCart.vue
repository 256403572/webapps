<template>
  <div class="fours">
    <home>
      <div slot="center" class="center">购物车({{$store.state.list.length}})</div>
    </home>
    <cartlist :cartList="$store.state.list"></cartlist>
    <checkbox></checkbox>
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
import home from '../view/home.vue'
import cartlist from '../view/购物车/cartlist.vue'
import checkbox from '../view/购物车/checkbox.vue'
// import Scroll from '../components/scroll/Scroll.vue'
export default{
  name: "ShoppingCart",
  components:{
    home,
    cartlist,
    checkbox
    // Scroll
  }
};
</script>

<style scoped>
</style>