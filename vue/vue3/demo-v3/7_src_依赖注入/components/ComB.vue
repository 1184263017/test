<template>
  <div>
    <h2>ComB</h2>
    {{ title }}
    <ComC></ComC>
  </div>
</template>

<script setup>
import ComC from "./ComC.vue";
import { defineProps, inject, provide } from "vue";
components: {
  ComC;
}
const title = inject("title");
provide("title", "这是B的title");
</script>

<style lang="scss" scoped>
</style>