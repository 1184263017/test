<template>
  <div>
    <h2>UserB</h2>
    params:{{ $route.params }}
    <hr />
    query:{{ $route.query }}
    <hr />
    hash:{{ $route.hash }}
    <hr>
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

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>