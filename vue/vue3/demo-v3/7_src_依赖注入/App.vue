<template>
  <div>
    <h1>App</h1>
    {{ title }}
    <button @click="title = 'haha'">save title</button>
    <ComA></ComA>
  </div>
</template>

<script setup>
import ComA from "./components/ComA.vue";
import { ref, provide, readonly } from "vue";
const title = ref("xixi");
provide("title", {
  //不可直接修改,只能通过方法修改
  title: readonly(title),
  updateTitle: (value) => {
    title.value = value;
  },
});
provide("num", readonly(0)); //不可直接修改,只能通过方法修改
</script>

<style lang="scss" scoped></style>