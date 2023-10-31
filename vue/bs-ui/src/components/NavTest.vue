<template>
  <div>
    <h2>导航菜单</h2>
    <ul>
      <li v-for="v in routers" :key="v.name">
        {{ v.meta.name }}
        <ul>
          <li v-for="v1 in v.children" :key="v1.name">
            <router-link :to="{ name: v1.name }">{{ v1.meta.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavTest',

  data() {
    return {};
  },

  mounted() {
    console.log(this.$router.options.routes);
  },

  methods: {},
  computed: {
    routers() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="scss" scoped></style>
