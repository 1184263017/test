<template>
  <div>
    <h2>TsInput</h2>
    <input
      type="text"
      :value="valueAbc"
      @input="$emit('inputAbc', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "TsButton",
  props: ["valueAbc"],
  model: {
    prop: "valueAbc",
    event: "inputAbc",
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>