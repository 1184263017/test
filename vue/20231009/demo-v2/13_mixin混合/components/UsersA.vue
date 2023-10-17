<template>
  <div>
    <h2>UsersA</h2>
    {{ count }}
    <button @click="count++">count++</button>
    <button @click="say">say</button>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonUsersA",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>