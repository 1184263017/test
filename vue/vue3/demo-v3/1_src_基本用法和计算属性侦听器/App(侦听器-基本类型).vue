<template>
  <div>
    <h1>App</h1>
    lastName:{{ lastName }}
    <hr>
    firstName:{{ firstName }}
    <hr>
    <button @click="lastName = 'xixi'">save lastName</button>
    <button @click="firstName = 'wang'">save firstName</button>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
// ref 返回的是一个对象
const lastName = ref('li');
const firstName = ref('jack');

// watch(lastName, (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// })
// watch(firstName, (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// })

// // 侦听器检测多个属性写法
// watch([lastName, firstName], (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// })
// 解构写法
watch([lastName, firstName], ([a, b], [a1, b1]) => {
  console.log(a, a1);
  console.log(b, b1);
})
</script>


<style lang="scss" scoped></style>