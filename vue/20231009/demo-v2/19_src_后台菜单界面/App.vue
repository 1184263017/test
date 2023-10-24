<template>
  <div class="main">
    <Home></Home>
    <MainBody></MainBody>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import MainBody from "./components/MainBody.vue";
export default {
  name: "WorkspaceJsonApp",
  components: { Home, MainBody },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    say() {
      console.log(this.$root.$options.abc);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
.main {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("./assets/imgs/图片5.png");
  display: flex;
  z-index:2222;
}
</style>