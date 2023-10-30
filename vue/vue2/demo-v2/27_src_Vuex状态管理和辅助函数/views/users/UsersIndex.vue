<template>
  <div>
    <h2>UsersIndex</h2>
    <input type="text" v-model="$store.state.title" />
    {{ $store.state.title }}
    <hr />
    <button @click="$store.commit('say')">say</button>
  </div>
</template>

<script>
export default {
  name: "UsersIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>