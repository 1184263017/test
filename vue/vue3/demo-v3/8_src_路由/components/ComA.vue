<template>
  <div>
    <h2>ComA</h2>
    {{ props }}
    {{ age }}
    {{ title }}
    <button @click="updateTitle('xixi')">saveTitle</button>
    <button @click="title = 'zhidaole'">saveTitle</button>
    <!-- <input
      type="text"
      :value="value"
      @input="emit('setValue', $event.target.value)"
    /> -->
    <input
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <input
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <input
      type="text"
      :value="age"
      @input="emit('update:age', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, inject } from "vue";
const props = defineProps(["value", "modelValue", "age"]);
const emit = defineEmits(["setValue", "update:modelValue", "update:age"]);
const { title, updateTitle } = inject("title");
</script>

<style lang="scss" scoped>
</style>