<template>
  <div>
    <h2>UserC</h2>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonUserA",
  data() {
    return {};
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate", "c");
    next();
  },
  beforeRouteEnter(to, from, next) {
    // console.log(this);
    console.log("beforeRouteEnter", "c");
    next((vm) => console.log(vm));
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", "c");
    next();
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>