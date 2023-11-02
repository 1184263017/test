<template>
  <div>
    <h1>App</h1>
    <button @click="comName = ComA">ComA</button>
    <button @click="comName = ComB">ComB</button>
    <button @click="comName = ComC">ComC</button>
    <keep-alive>
      <component :is="comName" @abcd="say"></component>
    </keep-alive>
    <!-- <component is="TsCard"></component> -->
  </div>
</template>

<script setup>
import ComA from "./components/ComA.vue";
import ComB from "./components/ComB.vue";
import ComC from "./components/ComC.vue";
import { ref, shallowRef } from "vue";

const comName = shallowRef(ComA);
function say() {
  console.log(123);
}
</script>

<style lang="scss" scoped>
</style>