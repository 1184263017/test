<template>
  <div>
    <h2>UserB</h2>
    params:{{ $route.params }}
    <hr />
    query:{{ $route.query }}
    <hr />
    hash:{{ $route.hash }}
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonUserA",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>