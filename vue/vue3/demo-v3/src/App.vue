<template>
  <div id="box">
    <h1>App</h1>
    <TsBody title="hahaah" :age="18"></TsBody>
  </div>
</template>

<script setup>
import TsBody from "./components/TsBody.vue";
import { onMounted, onUpdated, onUnmounted, ref } from "vue";
components: {
  TsBody;
}
const count = ref(0);
const falg = ref(true);
</script>

<style lang="scss" scoped>
</style>