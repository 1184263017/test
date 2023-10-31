<template>
  <div>
    <NavTest></NavTest>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {
    NavTest: () => import('../../components/NavTest.vue'),
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
