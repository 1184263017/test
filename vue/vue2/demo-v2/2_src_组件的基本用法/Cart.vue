<template>
    <div>
        <h2>hello Cart</h2>
        <div>
            {{ title }}
            <hr>
            {{ age }}
            <hr>
            {{ email }}
            <hr>
        </div>
    </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["title", "age", "email"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>