<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>名字</td>
          <td>年龄</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v, k) in data" :key="k">
          <td v-for="val of v">{{ val }}</td>
          <!-- <td>{{ v.name }}</td>
          <td>{{ v.age }}</td>
          <td v-for="(v1, k1) in arr1" :key="k1"></td> -->
        </tr>
      </tbody>
    </table>
    <button @click="obj1.count++">{{ obj1.count }}</button>
  </div>
</template>

<script setup>
import { defineProps, shallowRef } from "vue";
const props = defineProps(["data"]);
const obj1 = shallowRef({
  count: 10,
});
// console.log(props.data.map((el) => console.log(el.name)));

// const arr1 = props.data.map((el) => {
//   if (el.name) {
//     delete el.name;
//   }
//   if (el.age) {
//     delete el.age;
//   }
//   return el;
// });
// console.log(arr1);

const arr = [1, 1, 2, 2, 3, 3];
console.log(arr.filter((v, k, arr) => arr.indexOf(v) === k));
// [].reduce
</script>

<style lang="scss" scoped>
</style>