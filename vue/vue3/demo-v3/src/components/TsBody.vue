<template>
  <div>
    <h2>TsBody</h2>
    title:{{ props.title }}
    <hr />
    age:{{ props.age }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// const props = defineProps(["title", "age"]);
const props = defineProps({
  title: {
    type: String,
    default: "xixi",
  },
  age: {
    type: Number,
    default: 44,
  },
});
</script>

<style lang="scss" scoped>
</style>