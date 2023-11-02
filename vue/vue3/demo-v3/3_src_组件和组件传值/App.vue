<template>
  <div id="box">
    <h1>App</h1>
    <TsBody title="hahaah" :age="18"></TsBody>
    <TsBox @save-user="say" @edit-user="get"></TsBox>
  </div>
</template>

<script setup>
import TsBody from "./components/TsBody.vue";
import TsBox from "./components/TsBox.vue";
import { onMounted, onUpdated, onUnmounted, ref } from "vue";
components: {
  TsBody, TsBox;
}
const count = ref(0);
const falg = ref(true);

const say = () => {
  console.log("hello event");
};

const get = (v) => {
  console.log(v);
};
</script>

<style lang="scss" scoped>
</style>