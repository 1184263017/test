<template>
  <div>
    <h1>App</h1>
    <ul>
      <li>
        <router-link :to="'/user'">UserA</router-link>
      </li>
      <li>
        <router-link :to="'/user/a1'">UserA-a1</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <!-- <router-view name="default"></router-view> -->
    <router-view name="a"></router-view>
    <!-- <router-view name="b"></router-view>
    <router-view name="c"></router-view> -->
    <!-- <UserA></UserA> -->
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

  methods: {
    toUserA() {
      this.$router
        .replace({
          path: "/user",
          query: { name: "jack", age: 20 },
          hash: "www",
        })
        .catch(() => {
          console.log("导航异常");
        });
    },
    async toUserB() {
      // this.$router.push('/user/b/200');
      // this.$router
      //   .push({
      //     path: "/user/b/200",
      //     query: { name: "jack", age: 20 },
      //     hash: "www",
      //   })
      //   .catch(() => {
      //     console.log("导航异常");
      //   });

      // try {
      //   await this.$router.push({
      //     path: "/user/b/200",
      //     query: { name: "jack", age: 20 },
      //     hash: "www",
      //   });
      // } catch (error) {}

      this.$router
        .replace({
          path: "/user/b/200",
          query: { name: "jack", age: 20 },
          hash: "www",
        })
        .catch(() => {
          console.log("导航异常");
        });
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