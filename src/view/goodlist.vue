<template>
  <div class="git-three" @click="pesh">
      <img :src="goodlists.show.img" alt="">
      <div class="git-ate">{{goodlists.title}}</div>
      <div class="git-two">
      <span class="git-one">{{goodlists.price}}</span>
      <span>☆</span>
      <span>{{goodlists.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'goodlist',
  props:{
    goodlists:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    pesh(){
      this.$router.push('/pages/'+this.goodlists.iid);
    }
  }
}
</script>

<style>
</style>