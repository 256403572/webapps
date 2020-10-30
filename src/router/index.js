import vueRouter from 'vue-router'
import vue from 'vue'
import homePage from '../components/homePage.vue'
import classification from '../components/classification.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import my from '../components/my.vue'
vue.use(vueRouter);
const routes=[
  {
    path:"/homePage",
    component:homePage
  },
  {
    path:"/classification",
    component:classification
  },
  {
    path:"/ShoppingCart",
    component:ShoppingCart
  },
  {
    path:"/my",
    component:my
  },
]
const router=new vueRouter({
  routes,
  mode:"history"
})
export default router