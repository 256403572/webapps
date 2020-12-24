<template>
  <div class="total" v-show="isshow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name:"Toast",
  data() {
    return {
      message:'',
      isshow:false
    }
  },
  methods:{
    show(message,durirent){
      this.message=message;
      this.show=true
      setTimeout(()=>{
        this.message="";
        this.show=false
      },durirent)
    }
  }
}
</script>

<style scoped>
.total{
  position: fixed;
  left: 50%;
  top: 50%;
  /* 透明度为0.75 */
  background-color: rgba(0,0,0, 0.75);
  padding: 10px 10px;
  transform: translate(-50%,-50%);
  z-index: 999;
}
.total p{
  color: #ffffff;
}
</style>