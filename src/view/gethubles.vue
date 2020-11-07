<template>
  <div class="hale">
    <div>

    </div>
  </div>
</template>

<script>
import {gethuble} from '../network/gethomemultdata'
export default {
  name:'gethubles',
  data() {
    return {
      gets:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      }
    }
  },
  created(){
    gethuble('pop',1).then(res=>{
      console.log(res);
    })
  }
}
</script>

<style>

</style>