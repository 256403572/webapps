<template>
<div class="cart-list-main">
			<checked :ischeck="dert.checked" @mains="main" class="codes"></checked>
			<div class="cart-list-left"><img :src="dert.img" alt=""></div>
			<div class="cart-list-right">
				<p class="titles">{{dert.titles}}</p>
				<p class="desc">{{dert.desc}}</p>
				<div class="prices">
					<span class="goods-name">￥{{dert.prices}}</span>
					<span class="goods-info">×{{dert.count}}</span>
				</div>
			</div>
      </div>
</template>
  
<script>    
import checked from '../购物车/checked.vue'
export default {
  name:'cart',
  components:{
    checked
  },
  props:{
    dert:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    main(){
      this.dert.checked=!this.dert.checked
    }
  }
}
</script>

<style scoped>
.cart-list-main{
	border-bottom: 1px solid gray;
	margin-top: 4px;
	display: flex;
}
.cart-list-left{
	width: 30%;
	display:flex;
}
.cart-list-left img{
	width: 80px;
	height: 120px;
	border-radius: 10px;
	margin-left: 4px;
}
.cart-list-right{
	width: 68%;
	margin-top: 5px;
	margin-left: 4px;
}
.cart-list-right p{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.cart-list-right .titles{
	font-size: 20px;
}
.cart-list-right .desc{
	font-size: 16px;
	color: darkgray;
}
.prices{
	font-size: 20px;
	margin-top: 20px;
}
.prices .goods-name{
	color: red;
}
.prices .goods-info{
	float:right;
	right: 4px;
}
.codes{
	margin-top: 46px;
}
</style>