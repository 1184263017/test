<template>
  <div>
    <h2>Home</h2>
    <input type="text" :value="value" @input="send" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonHome",
  props: ["title", "value"],
  data() {
    return {};
  },

  mounted() {},
  //   updated() {
  //     this.$emit("input", e.target.value);
  //   },

  methods: {
    send(e) {
      //   console.log(e.target.value);
      //   this.$emit("sendTitle", e.target.value);
      //   this.$emit("update:model-value", e.target.value);
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>