<template>
    <div class="conter" ref="conter">
      <slot></slot>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name:"scroll",
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScoll(this.$refs.conter,{
    }) 
  },
}
</script>

<style>

</style>