<template>
  <div>
    hello app!!
    <hr />
    {{ title }}
    <hr />
    <button @click="say">say</button>
    <hr />
    <Home :a="10" b="20" title="哈哈"></Home>
    <Home></Home>
    <Cart age="18" email="118@qq.com" title="你好"></Cart>
  </div>
</template>

<script>
// import Home from "./Home";
export default {
  // 导出new vue
  name: "App",
  // components:{Home},
  data() {
    return {
      title: "hello app",
    };
  },

  mounted() {},

  methods: {
    say() {
      console.log("hello app");
    },
  },

  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
div {
  border: solid;
  padding: 10px;
}
</style>