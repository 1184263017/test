<template>
  <div>
    <h1>App</h1>
    <Vuex></Vuex>
    <Jx></Jx>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonApp",

  data() {
    return {};
  },
  components: {
    Vuex: () => import("./components/Vuex.vue"),
    Jx: () => import("./components/Jx.vue"),
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
div {
  margin: 10px;
  padding: 10px;
  border: solid;
}
</style>