<template>
  <div>
    <h2>ComC</h2>
    {{ title }}
  </div>
</template>

<script setup>
import { inject } from "vue";
const title = inject("title");
</script>

<style lang="scss" scoped>
</style>