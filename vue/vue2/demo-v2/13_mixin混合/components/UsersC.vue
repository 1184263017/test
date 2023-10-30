<template>
  <div>
    <h2>UsersB</h2>
    {{ count }}
    {{ title }}
    <button @click="count++">count++</button>
  </div>
</template>

<script>
import { obj1, obj2 } from "../mixin";
export default {
  name: "WorkspaceJsonUsersA",
  mixins: [
    {
      data() {
        return {
          count: 100,
        };
      },
      methods: {},
    },
    {
      data() {
        return {
          title: "userC",
        };
      },
      methods: {},
    },
    obj1,
    obj2,
  ],
  data() {
    return {
      title: "this userC",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>