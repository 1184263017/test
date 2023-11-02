<template>
  <div>
    <h2>HomeIndex</h2>
    query:{{ route.query }}
  </div>
</template>

<script setup>
import { useRoute,onBeforeRouteUpdate,onBeforeRouteLeave } from "vue-router";
const route = useRoute();
onBeforeRouteUpdate((to,form,next)=>{
  console.log(to,form);
  next();
})
onBeforeRouteLeave((to,form,next)=>{
  console.log(to,form);
  next();
})
</script>

<style lang="scss" scoped>
</style>