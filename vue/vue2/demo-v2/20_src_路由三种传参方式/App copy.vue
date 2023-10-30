<template>
  <div>
    <h1>App</h1>
    <ul>
      <li>
        <router-link to="/user/a?name=jack&age=20"
          >UserA(查询字符串传参)</router-link
        >
      </li>
      <li>
        <router-link to="/user/a?name=lili&age=18"
          >UserA(查询字符串传参)</router-link
        >
      </li>
      <li>
        <router-link to="/user/a#abc">UserA(hash传参)</router-link>
      </li>
      <li>
        <router-link
          to="/user/b/10/c/tom?age=20&gender=1#qwer#qewweqweqw#787897"
          >UserB(路径传参)</router-link
        >
      </li>
    </ul>
    params:{{ $route.params }}
    <hr />
    query:{{ $route.query }}
    <hr />
    hash:{{ $route.hash }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonApp",

  data() {
    return {};
  },

  mounted() {},

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