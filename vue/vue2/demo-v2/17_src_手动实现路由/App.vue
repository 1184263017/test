<template>
  <div>
    <h1>App</h1>
    <div>
      <ul>
        <li><a href="#/user/a">UserA</a></li>
        <li><a href="#/user/b">UserB</a></li>
        <li><a href="#/a/b/c/d">/a/b/c/d</a></li>
        <li><a href="#/user/c">UserC</a></li>
      </ul>
    </div>

    <div>
      <button @click="path = 'UserA'">UserA</button>
      <button @click="path = 'UserB'">UserB</button>
      <button @click="path = 'UserC'">UserC</button>
    </div>
    <component :is="path"></component>
  </div>
</template>

<script>
// http://127.0.0.1:8088/#hash/
import UserA from "./components/UserA.vue";
import UserB from "./components/UserB.vue";
import UserC from "./components/UserC.vue";
export default {
  name: "WorkspaceJsonApp",
  components: {
    UserA,
    UserB,
    UserC,
  },
  data() {
    return {
      path: "UserA",
      routes: {
        // 路由表
        "/user/a": "UserA",

        "/user/b": "UserB",
        "/a/b/c/d": "UserB",
        "/user/c": "UserC",
      },
    };
  },
  mounted() {
    // 监听事件
    window.onhashchange = () => {
      // 获取hash值
      // console.log(window.location.hash.slice(1));
      this.path = this.routes[window.location.hash.slice(1)];
    };
  },

  methods: {},
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