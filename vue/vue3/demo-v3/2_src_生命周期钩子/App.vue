<template>
  <div id="box">
    <h1>App</h1>
    <button @click="count++">{{ count }}</button>
    <button @click="falg = !falg">销毁组件</button>
    <TsCard v-if="falg"></TsCard>
  </div>
</template>

<script setup>
import TsCard from "./components/TsCard.vue";
import { onMounted, onUpdated, onUnmounted, ref } from "vue";
components: {
  TsCard;
}
const count = ref(0);
const falg = ref(true);
// 挂载后执行
onMounted(() => {
  console.log("onMounted", document.getElementById("box"));
});

// 当页面发生变化时执行
onUpdated(() => {
  console.log("onUpdated");
});

// 销毁时执行
onUnmounted(() => {
  console.log("onUnmounted");
});
</script>

<style lang="scss" scoped>
</style>