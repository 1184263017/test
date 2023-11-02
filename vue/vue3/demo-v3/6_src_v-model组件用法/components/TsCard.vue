<template>
  <div>
    <h2>TsCard</h2>
    {{ time }}
  </div>
</template>

<script setup>
import { onUnmounted, ref } from "vue";
const time = ref("");
const h = setInterval(() => {
  console.log("time");
  time.value = new Date().toLocaleString();
}, 1000);
onUnmounted(() => {
  clearInterval(h);
});
</script>

<style lang="scss" scoped></style>