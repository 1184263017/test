<template>
  <div>
    <Home></Home>
    <router-view></router-view>


  </div>

  
</template>

<script>
import Home from "../../components/Home.vue";
export default {
  name: "LayoutIndex",
  components: { Home },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>