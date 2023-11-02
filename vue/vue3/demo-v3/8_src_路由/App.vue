<template>
  <div>
    <h1>App</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'HomeIndex', query: { name: 'jack' } }"
          >HomeIndex</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'ShopIndex', params: { id: 200 } }"
          >ShopIndex</router-link
        >
        <!-- <router-link to="/shop/index/200">ShopIndex</router-link> -->
      </li>
      <li>
        <button
          @click="router.push({ name: 'ShopIndex', params: { id: 200 } })"
        >
          ShopIndex
        </button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  shallowRef,
  provide,
  readonly,
  watch,
} from "vue";
import { useRoute, useRouter, onBeforeRouteLeave,onBeforeRouteUpdate} from "vue-router";
const route = useRoute();
const router = useRouter();

watch(
  () => route.query.name,
  (a, b) => {
    console.log(a, b);
  }
);
</script>

<style lang="scss" scoped>
</style>