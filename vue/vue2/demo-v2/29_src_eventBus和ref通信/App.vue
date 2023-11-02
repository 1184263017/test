<template>
  <div>
    <h1>App</h1>
    <div>
      <h2>eventBus</h2>
      {{ eventBus.title }}
      <hr>
      <button @click="eventBus.count++">{{ eventBus.count }}</button>
    </div>
    <TsHome ref="tsHome"></TsHome>
    <button @click="log">TSHOME</button>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonApp",
  components: {
    TsHome: () => import("./components/TsHome.vue"),
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    log(){
      const tsHome = this.$refs.tsHome;
      console.log(tsHome);
      console.log(tsHome.title);
      console.log(tsHome.add(1,2));
    }
  },
};
</script>

<style lang="scss">
div {
  margin: 10px;
  padding: 10px;
  border: solid;
}
</style>