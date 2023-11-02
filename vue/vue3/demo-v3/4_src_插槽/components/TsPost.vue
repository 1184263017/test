<template>
  <div>
    <h2>TsPost</h2>
    <slot>default</slot>
    <slot name="a" username="jack" :age="18">a</slot>
    <slot name="b">b</slot>
  </div>
</template>

<script>
export default {
  name: "TsPost",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>