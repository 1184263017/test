<template>
  <div>
    <h2>Card</h2>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {
      count: 10,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>