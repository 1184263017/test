<template>
  <div>
    <h1>App</h1>
    <ul>
      <li>
        <router-link :to="'/user'">UserA</router-link>
      </li>
      <li>
        <router-link :to="'/user/a1'">UserA1</router-link>
      </li>
      <li>
        <router-link :to="'/user/a2'">UserA2</router-link>
      </li>
      <li>
        <router-link :to="'/user/a2/a21'">UserA21</router-link>
      </li>
      <li>
        <router-link :to="'/user/b/200?name=jack&age=20#abc'"
          >UserB</router-link
        >
      </li>
      <li>
        <router-link
          :to="{
            path: '/user/b/100',
            query: { name: 'jack', age: 20 },
            hash: 'abc',
          }"
          >UserB</router-link
        >
      </li>
    </ul>
    <button @click="toUserA">UserA</button>
    <button @click="toUserB">UserB</button>
    <hr />
    <button @click="$router.go(1)">前进</button>
    <button @click="$router.go(-1)">后退</button>
    <button @click="$router.go(0)">刷新</button>
    <hr />
    <ul>
      <li>
        <router-link :to="{ name: 'user' }">UserA</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'user-a21' }">UserA21</router-link>
      </li>
      <li>
        <!-- <router-link :to="'/user/b/200?name=jack&age=20#abc'"
          >UserB</router-link
        > -->
        <router-link
          :to="{
            name: 'userb',
            params: { id: '200' },
            query: { name: 'jack', age: 20 },
            hash: 'abc',
          }"
          >UserB</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
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