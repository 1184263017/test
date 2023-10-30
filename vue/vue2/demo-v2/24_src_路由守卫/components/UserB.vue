<template>
  <div>
    <h2>UserB</h2>
    params:{{ $route.params }}
    <hr />
    query:{{ $route.query }}
    <hr />
    hash:{{ $route.hash }}
    <hr />
    {{ id }}
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonUserA",
  props: ["id"],
  data() {
    return {};
  },
  // beforeRouteEnter > beforeCreate
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>