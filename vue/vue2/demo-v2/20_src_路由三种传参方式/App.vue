<template>
  <div>
    <h1>App</h1>
    <ul>
      <li>
        <router-link :to="'/user/a'">UserA</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <UserA></UserA>
  </div>
</template>

<script>
import UserA from "./components/UserA.vue";
export default {
  name: "WorkspaceJsonApp",
  components: {
    UserA,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},

  watch: {
    // $route(newV, oldV) {
    //   console.log(newV, oldV);
    // },
    $route: {
      handler(newV, oldV) {
        console.log(newV, oldV);
      },
      immediate: true,
      // deep:true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
a {
  cursor: pointer;
  text-decoration: none;
}
</style>