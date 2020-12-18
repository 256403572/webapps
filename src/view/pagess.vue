<template>
  <div>
    {{iid}}
  </div>
</template>

<script>
import {gitttop} from "../network/indexs.js";
export default {
  name:'pagess',
  data() {
    return {
      iid:null
    }
  },
  created(){
      this.iid=this.$route.params.iid;
      gitttop(this.iid).then(res=>{
        console.log(res);
      })
  }
}
</script>

<style>

</style>