<template>
  <div class="popular" @click="hand">
    <div class="lefted">{{lefted.title}}</div>
  </div>
</template>

<script>
export default {
  name:"lefts",
  props:{
    lefted:{
      type:Object,
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
    hand(){
      this.$emit('hadelefts')
    }
  },
}
</script>

<style scoped>

</style>