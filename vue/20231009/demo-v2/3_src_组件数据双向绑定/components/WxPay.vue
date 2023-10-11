<template>
  <div>
    <h2>WxPay</h2>
  </div>
</template>

<script>
export default {
  name: "Pay",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    getOwn() {
      this.$emit("success", "WxPay");
    },
  },
  mounted() {
    this.getOwn();
  },
};
</script>

<style lang="scss" scoped>
</style>