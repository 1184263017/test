<template>
  <div>
    <h2>ComB</h2>
  </div>
</template>
  
  <script setup>
import { onActivated, onDeactivated } from "vue";
onActivated(() => {
  console.log("onActivated 组件激活");
});
onDeactivated(() => {
  console.log("onDeactivated 组件失活");
});
</script>
  
  <style lang="scss" scoped>
</style>