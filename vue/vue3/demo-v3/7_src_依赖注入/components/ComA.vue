<template>
  <div>
    <h2>ComA</h2>
    {{ title }}
    {{ num }}
    {{ age }}
    <button @click="num++">num++</button>
    <button @click="updateTitle('zhidaole')">updateTitle</button>
    <button @click="title='ComA'">updateTitle</button>
    <ComB></ComB>
  </div>
</template>

<script setup>
import ComB from "./ComB.vue";
import { defineProps, inject } from "vue";
components: {
  ComB;
}
const { title, updateTitle } = inject("title");
const num = inject("num");
const age = inject("age", 20);
</script>


<style lang="scss" scoped>
</style>