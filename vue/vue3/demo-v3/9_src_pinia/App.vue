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
        <router-link :to="{ name: 'ShopIndex' }"
          >ShopIndex</router-link
        >
      </li>
      <li>
        <button
          @click="router.push({ name: 'ShopIndex' })"
        >
          ShopIndex
        </button>
      </li>
    </ul>
    {{ infoStore.count }} <button @click="infoStore.count++">count++</button>
    <hr>
    {{ shopStore.title }}
    <router-view></router-view>
  </div>
</template>

<script setup>
import {
  ref,
  shallowRef,
} from "vue";
import { useRoute, useRouter,} from "vue-router";
import {useCardStore,useInfoStore,useShopStore} from '@/store';
const route = useRoute();
const router = useRouter();
// 获取的状态对象
const infoStore = useInfoStore();
console.log(infoStore.title);
// infoStore.g1
// infoStore.g2
// infoStore.say()


const shopStore = useShopStore();
// console.log(shopStore);
</script>

<style lang="scss" scoped>
</style>