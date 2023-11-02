<template>
  <div>
    <h1>App</h1>
    <ComA ref="ComARef"></ComA>
    <button @click="log">ComARef</button>
  </div>
</template>

<script setup>
import ComA from '@/components/ComA.vue'
console.log(ComA);
import {ref,shallowRef} from 'vue'
const ComARef = shallowRef(null)
function log() {
  console.log(ComARef);
  console.log(ComARef.value.count);
  console.log(ComARef.value.add(100,200));
}

</script>

<style lang="scss" scoped>
</style>