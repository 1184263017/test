<template>
  <div>
    <!-- 放所以页面的公共部分 -->
    <h2>{{ $route.meta.name }}</h2>
    <p class="crumb">
      <span v-for="v in crumbRoutes" :key="v.name">
        <router-link :to="{ name: v.name }">{{ v.meta.name }}</router-link>
      </span>
    </p>
    <div>
      <ul>
        <!-- 一级路由 -->
        <li v-for="v in routes" :key="v.name">
          <!-- <router-link :to="{ name: v.name }">{{ v.meta.name }} </router-link> -->
          <router-link :to="{ name: v.children[0].name }"
            >{{ v.meta.name }}
          </router-link>
          <!-- 二级路由 -->
          <ul v-if="v.children.length > 1">
            <li v-for="v1 in v.children" :key="v1.name">
              <router-link :to="{ name: v1.name }"
                >{{ v1.meta.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",

  data() {
    return {};
  },

  mounted() {
    // console.log(this.$router.options.routes);
    // console.log(this.$route.matched);
  },

  methods: {},
  computed: {
    routes() {
      return this.$router.options.routes.filter((el) => el.meta?.name);
    },
    crumbRoutes() {
      return this.$route.matched;
    },
  },
};
</script>

<style lang="scss" scoped>
.crumb {
  > span::after {
    content: ">";
  }
  :last-child::after {
    content: "";
  }
}
</style>