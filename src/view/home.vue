<template>
  <div class="one">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"home"
}
</script>

<style>
.one{
  height: 40px;
  display:flex;
  background-color: crimson;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}
.center{
  flex: 1;
}
.left,.right{
  flex: 1;
}
</style>