<template>
  <div>
    <h2>ShopIndex</h2>
    params:{{ route.params }}
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
</style>