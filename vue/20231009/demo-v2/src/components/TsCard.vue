<template>
  <div>
    <h2>TsCard</h2>
    <slot>hello TsCard</slot>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonTsCard",

  data() {
    return {
        content:'this is content Ts'
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>