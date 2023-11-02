<template>
  <div id="box">
    <h1>App</h1>
    <TsPost>
      <template #default> hello jack </template>
      <template #a="obj"> hello lili {{ obj }}</template>
    </TsPost>
  </div>
</template>

<script setup>
import TsPost from "./components/TsPost.vue";
import { onMounted, onUpdated, onUnmounted, ref } from "vue";
components: {
  TsPost;
}
const count = ref(0);
const falg = ref(true);

const say = () => {
  console.log("hello event");
};

const get = (v) => {
  console.log(v);
};
</script>

<style lang="scss" scoped>
</style>