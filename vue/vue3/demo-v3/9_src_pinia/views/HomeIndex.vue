<template>
  <div>
    <h2>HomeIndex</h2>
    
    <button @click="count++">{{ count }}</button>
    <button @click="shopStore.count++">{{ shopStore.count }}</button>
  </div>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useShopStore} from '@/store';
const shopStore = useShopStore();
// 解决解构丢失响应性的问题
const {count} = storeToRefs(shopStore);
shopStore.say();
console.log(shopStore.g2);
</script>

<style lang="scss" scoped>
</style>