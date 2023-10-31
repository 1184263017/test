<template>
  <div>
    <h1>App</h1>
    {{ info }}
    <button @click="info.age++">info.age++</button>
    <button @click="info.name = 'wang'">save info.name</button>
    <button @click="info.size.w++">info.size.w++</button>
  </div>
</template>
<script setup>
import { reactive, watch } from 'vue';
const info = reactive({
  name: 'jack',
  age: 20,
  size: {
    w: 100,
    h: 200
  }
})

// 侦听整个对象的变化,深层监听,所有的改变都会触发
// watch(info, (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// })

// 监听对象的单个属性
watch(() => info.age, (newValue, oldValue) => {
  console.log(newValue, oldValue);
})

// 对复制的对象第一层进行监听
watch(() => ({ ...info.size }), (newValue, oldValue) => {
  console.log(newValue, oldValue);
})

// 手动开启深层监听
watch(() => info.size, (newValue, oldValue) => {
  console.log(newValue, oldValue);
}, { deep: true, immediatetrue: true })

</script>


<style lang="scss" scoped></style>