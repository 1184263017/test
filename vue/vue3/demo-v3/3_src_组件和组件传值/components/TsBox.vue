<template>
  <div>
    <h2>TsBox</h2>
    <button @click="emit('save-user')">save-user</button>
    <button @click="emit('edit-user', { a: 1, b: 2 })">edit-user</button>
    <button @click="test">test</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["save-user", "edit-user"]);

const test = () => {
  emit("edit-user", { name: "jack" });
};
</script>

<style lang="scss" scoped>
</style>