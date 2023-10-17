<template>
  <div>
    <h1>App</h1>
    {{ title }}
    {{ count }}
    {{ fullName }}
    <UsersA></UsersA>
    <UsersB></UsersB>
    <UsersC></UsersC>
  </div>
</template>

<script>
import UsersA from "./components/UsersA.vue";
import UsersB from "./components/UsersB.vue";
import UsersC from "./components/UsersC.vue";
export default {
  name: "WorkspaceJsonApp",
  components: {
    UsersA,
    UsersB,
    UsersC
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
  created() {
    console.log('我是App生命周期钩子');
  }
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
</style>