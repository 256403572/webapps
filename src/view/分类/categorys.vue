<template>
  <div class="left">
    <lefts v-for="(item,index) in cate" :key="item.acm" :lefted="item" :class="{tabs:currindex===index}" @hadelefts="hands(index)"></lefts>
    <ul>
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
import lefts from '../分类/lefts.vue'
export default {
  name:"categorys",
  components:{
    lefts
  },
  props:{
    cate:{
      type:Array,
      default(){
        return{}
      }
    }
  },
  data() {
    return {
     
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>