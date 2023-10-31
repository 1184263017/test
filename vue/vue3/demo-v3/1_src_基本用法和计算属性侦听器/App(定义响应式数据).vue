<template>
  <div>
    <h1>App {{ title }}</h1>
    <button @click="say">say</button>
    <hr>
    {{ count }}
    <button @click="count++">count++</button>
    <hr>
    <h2>ref</h2>
    <!-- 模版自动解包 -->
    {{ info.size.w }}
    <button @click="info.size.w++">info.size.w++</button>
    <hr>
    <h2>shallowRef</h2>
    {{ info3 }}
    <button @click="info3 = { a: 1, b: 2 }">info3={...}</button>
    <hr>
    <h2>shallowReactive</h2>
    {{ info2 }}
    <button @click="info2.size.w++">info2.size.w++</button>
    <button @click="info2.age++">info2.age++</button>
    <hr>
    <h2>toref torefs</h2>
    {{ age }}
    {{ user.age }}
    <button @click="age++">age++</button>
  </div>
</template>
<script setup>
import { ref, shallowRef, reactive, shallowReactive, toRef, toRefs } from 'vue';
const title = 'hello';
// ref 返回的是一个对象
const count = ref(0);
console.log(count);
console.log(count.value);
const info = ref({
  name: 'jack',
  size: {
    w: 100,
    h: 200
  }
})

const info3 = shallowRef({
  name: 'jack',
  size: {
    w: 100,
    h: 200
  }
})
console.log(info.value);

const info1 = reactive({
  name: 'jack',
  size: {
    w: 100,
    h: 200
  }
})
console.log(info1.name);

const info2 = shallowReactive({
  name: 'jack',
  age: 20,
  size: {
    w: 100,
    h: 200
  }
})
console.log(info2.size.w);

const age = toRef(info2, 'age');
console.log(age);


const user = toRefs(info2);
</script>


<style lang="scss" scoped></style>