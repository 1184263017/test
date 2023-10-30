<template>
  <div>
    <h1>App</h1>
    <router-view></router-view>
    <!-- <Vuex></Vuex> -->
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonApp",
  components: {
    // Vuex: () => import("./components/Vuex.vue"),
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  margin: 10px;
  padding: 10px;
  border: solid;
}
</style>