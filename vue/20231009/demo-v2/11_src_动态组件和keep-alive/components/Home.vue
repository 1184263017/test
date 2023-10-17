<template>
  <div>
    <h2>Home</h2>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      username: "jack",
    };
  },

  mounted() {},

  methods: {},

  beforeCreate() {
    console.log("不可以访问this");
  },
  created() {
    console.log("可以访问this");
  },

  beforeMount() {
    console.log("可以访问this");
  },
  mounted() {
    console.log("可以访问this,可以访问DOM");
  },

  // 激活(组件被创建)
  activated() {
    console.log("Home activated 可以访问this,可以访问DOM");
  },
  // 失活(组件被销毁)
  deactivated() {
    console.log("Home deactivated");
  },

  // 节点销毁(如果有失活,就不在需要设置销毁周期函数)
  // beforeDestroy() {},
  // destroyed() {},

  beforeUpdate() {
    console.log("beforeUpdate 可以访问this,可以访问DOM");
  },
  updated() {
    console.log("updated 可以访问this,可以访问DOM");
  },
};
</script>

<style lang="scss" scoped>
</style>