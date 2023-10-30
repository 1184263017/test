<template>
  <div>
    <h2>TsButton</h2>
    {{ lastName }}
    <button @click="$emit('sendFile')">TsButton</button>
  </div>
</template>

<script>
export default {
  name: "TsButton",
  props: ["lastName", "maxNumberPay"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>