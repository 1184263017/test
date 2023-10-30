<template>
  <div>
    <h2>TsHome</h2>
    <slot></slot>
    <TsButton></TsButton>
    <TsSubmit></TsSubmit>
  </div>
</template>

<script>
import TsButton from "./TsButton.vue";
import TsSubmit from "./TsSubmit.vue";
export default {
  name: "TsHome",
  components: {
    TsButton,
    TsSubmit,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>