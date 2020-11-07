<template>
  <div id="app">
   <tarbars></tarbars>
   <router-view></router-view>
  </div>
</template>
<script>
import tarbars from './components/tarbar.vue'
export default {
  name: 'App',
  components: {
    tarbars
  },
}
</script>
<style>
@import 'assets/css/index.css'
</style>
