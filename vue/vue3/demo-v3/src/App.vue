<template>
  <div>
    <h1>App</h1>
    <ComA ref="ComARef"></ComA>
    <button @click="log">ComARef</button>
    <List :data="data"></List>
  </div>
</template>

<script setup>
import ComA from "@/components/ComA.vue";
import List from "@/components/List.vue";
console.log(ComA);
import { ref, shallowRef, reactive } from "vue";
const ComARef = shallowRef(null);
const data = reactive([
  {
    name: "jack",
    age: 18,
    gender: 1,
  },
  {
    name: "lili",
    age: 20,
    gender: 2,
  },
]);
function log() {
  console.log(ComARef);
  console.log(ComARef.value.count);
  console.log(ComARef.value.add(100, 200));
}
</script>

<style lang="scss" scoped>
</style>