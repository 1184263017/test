<template>
  <div>
    <h1>App</h1>
    {{ username }}
    {{ age + 100 }}
    {{ maxCount }}
    <!-- 手动双向数据绑定 -->
    <!-- <ComA :value="username" @save-value="username = $event"></ComA> -->

    <!-- v-model 语法糖写法 -->
    <!-- <ComA :modelValue="username" @update:modelValue="username = $event"></ComA> -->
    <!-- <ComA v-model="username"></ComA> -->
    <ComA
      v-model:age.number.string="age"
      v-model:maxCount="maxCount"
      v-model="username"
    ></ComA>
  </div>
</template>

<script setup>
import ComA from "./components/ComA.vue";
import { ref } from "vue";
const username = ref("jack");
const age = ref(18);
const maxCount = ref(100);
</script>

<style lang="scss" scoped></style>