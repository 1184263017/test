<template>
  <div>
    <h2>ComA</h2>
    <!-- <input
      type="text"
      :value="props.value"
      @input="emit('save-value', $event.target.value)"
    /> -->
    {{ ageModifiers }}
    username:<input
      type="text"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <hr />
    age:<input
      type="text"
      :value="props.age"
      @input="
        emit(
          'update:age',
          ageModifiers.number ? +$event.target.value : $event.target.value
        )
      "
    />
    <hr />
    maxCount<input
      type="text"
      :value="props.maxCount"
      @input="emit('update:maxCount', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// const props = defineProps(["value"]);
// const emit = defineEmits(["save-value"]);

const props = defineProps(["modelValue", "age", "maxCount", "ageModifiers"]);
const emit = defineEmits([
  "update:modelValue",
  "update:age",
  "update:maxCount",
]);
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