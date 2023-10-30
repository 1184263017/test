<template>
  <div>
    <h2>UserA</h2>
    <router-link :to="'/user/b/100?title=' + title + '#hahahah'"
      >UserB</router-link
    >
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonUserA",

  data() {
    return {
      title: "this is A",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>