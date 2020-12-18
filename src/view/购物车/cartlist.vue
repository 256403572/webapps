<template>
	<div class="cart-list">
		<cart v-for="item in cartList" :key="item.iid" :dert="item"></cart>
	</div>
</template>

<script>
import cart from '../购物车/cart.vue'
	export default {
		name: 'cartlist',
		components:{
			cart
		},
		props: {
			cartList: {
				type: Array,
				default() {
					return {}
				}
			},
		}
	}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
.cart-list{
	margin-top: 44px;
	margin-left: 30px;
}

</style>
