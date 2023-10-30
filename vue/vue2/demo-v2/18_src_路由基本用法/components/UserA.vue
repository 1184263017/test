<template>
  <div>
    <h2>UserA</h2>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonUserA",

  data() {
    return {};
  },

  mounted() {
    setTimeout(()=>{
      console.log(123);
      this.$root.$options.abc = { c: 3 };
    },4000);
    console.log(this.$root.$options.abc);
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>