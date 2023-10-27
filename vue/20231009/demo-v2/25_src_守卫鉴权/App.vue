<template>
  <div>
    <h1>App</h1>
    <ul>
      <li v-for="v in routes" :key="v.name">
        <router-link :to="{ name: v.name }">{{ v.meta.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
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
  computed: {
    routes() {
      return this.$router.options.routes.filter(
        (el) => el.meta.hidden === false
      );
    },
  },
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

<style lang="scss">
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
</style>