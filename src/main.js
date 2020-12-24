import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'
import toast from './components/total/index.js'
//导入fastclick
import Fastclick from 'fastclick'
//图片懒加载
import Lazyload from 'vue-lazyload'
Vue.config.productionTip = false
//插入toast插件
Vue.use(toast);
//减少300ms延迟
Fastclick.attach(document.body);
//插入vue-lazyload插件
Vue.use(Lazyload,{
  loading:require('./assets/img/timg.png'),
  throttleWait:500
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
