<template>
  <div>
    <h2>TsEmail 组件数据双向绑定</h2>
    <hr />
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "TsEmail",
  props: ["value"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>