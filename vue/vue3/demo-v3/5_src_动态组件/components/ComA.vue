<template>
  <div>
    <h2>ComA</h2>
    <!-- <ComB></ComB> -->
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onUnmounted, onMounted } from "vue";
onActivated(() => {
  console.log("onActivated ComA");
});
onDeactivated(() => {
  console.log("onDeactivated ComA");
});
onUnmounted(() => {
  console.log("onUnmounted ComA");
});
onMounted(() => {
  console.log("onMounted ComA");
});
</script>

<!-- <script>
import ComB from "./ComB.vue";
export default {
  components: { ComB },
  setup(a, { emit }, c) {
    console.log(emit("abcd"));
    return {};
  },
};
</script> -->

<style lang="scss" scoped>
</style>