<template>
  <div>
    <h1>App</h1>
    <!-- <keep-alive> -->
    <!-- <Home v-if="cname === 'Home'"></Home>
    <Card v-if="cname === 'Card'"></Card>
    <Shop v-if="cname === 'Shop'"></Shop> -->
    <!-- </keep-alive> -->

    <div>
      <button :class="{ active: cname === 'Home' }" @click="cname = 'Home'">
        Home
      </button>
      <button :class="{ active: cname === 'Card' }" @click="cname = 'Card'">
        Card
      </button>
      <button :class="{ active: cname === 'Shop' }" @click="cname = 'Shop'">
        Shop
      </button>
    </div>

    <!-- <keep-alive exclude="" include="Home,Card"> -->
    <!-- <keep-alive :include="['Home', 'Card']"> -->
    <!-- <keep-alive :exclude="['Home', 'Card']"> -->
    <keep-alive exclude="Home,Card">
      <!-- <keep-alive> -->
      <!-- 动态组件 -->
      <component :is="cname"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Card from "./components/Card.vue";
import Shop from "./components/Shop.vue";
export default {
  name: "WorkspaceJsonApp",
  components: {
    Home,
    Card,
    Shop,
  },
  data() {
    return {
      cname: "Home",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  margin: 10px;
  padding: 10px;
  border: solid;
}
.active {
  background-color: skyblue;
  color: red;
}
</style>