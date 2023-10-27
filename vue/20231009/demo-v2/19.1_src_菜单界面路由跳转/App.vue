<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
  color: white;
}
.main {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("./assets/imgs/图片5.png");
  display: flex;
  z-index: 2222;
}
</style>