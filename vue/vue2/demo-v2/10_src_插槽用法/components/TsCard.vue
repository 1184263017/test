<template>
  <div>
    <h2>TsCard</h2>
    <slot :age="20">hello TsCard</slot>
    <slot name="a" username="jack" gender="body">hello a</slot>
    <slot name="b" email="jack@qq.com" phone="123456789">hello b</slot>
    <slot name="c">hello c</slot>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonTsCard",

  data() {
    return {
      content: "this is content Ts",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>