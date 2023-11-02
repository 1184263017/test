<template>
  <div>
    <h2 v-Style>ComA</h2>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary" size="small">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";
const count = ref(10);
function add(a, b) {
  return a + b;
}

// 简化写法
function vStyle(el) {
  el.style.color = "red";
}
// 完整写法
// const vStyle = {
//     mounted(el) {
//         el.style.color = 'red'
//         console.log(el);
//     },
//     unmounted() {

//     },
// }
// 暴露
defineExpose({
  count,
  add,
});
</script>

<style lang="scss" scoped>
</style>