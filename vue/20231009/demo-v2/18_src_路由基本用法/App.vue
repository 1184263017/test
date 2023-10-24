<template>
  <div>
    <h1>App</h1>
    <!-- <button @click="say">111</button> -->
    {{ $route.params }}
    <div>
      <ul>
        <li>
          <router-link to="/user/100/abc">UserA-/user/a/:id=abc</router-link>
        </li>
        <li>
          <router-link to="/user/qwer/100">UserA-/user/a/:id=100</router-link>
        </li>
        <li><router-link to="/user/b">UserB</router-link></li>
        <li><router-link to="/user/c">UserC</router-link></li>
      </ul>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonApp",
  data() {
    return {};
  },
  created() {
    // console.log(this.$route);
  },
  mounted() {
    // console.log(this.ro);
    // console.log(this.$root.$options.abc);
    // setTimeout(()=>{
    //   this.$root.$options.abc = { b: 2 };
    // },4000);
    // console.log(this.$router);
    // console.log(this.$route);
  },

  methods: {
    say() {
      console.log(this.$root.$options.abc);
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