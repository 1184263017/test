<template>
  <div>
    <h1>App</h1>
    <ul>
      <li v-for="(v,k) in routers" :key="k">
        <router-link v-if="v.name === 'ShopIndex'" :to="{name:v.name,params:{id:100}}">{{ v.meta.name }}</router-link>
        <router-link v-else :to="{name:v.name}">{{ v.meta.name }}</router-link>
      </li>
      <li><button @click="router.push({name:'ShopIndex',params:{id:100}})">ShopIndex</button></li>
    </ul>
    <router-view></router-view>
    <div>
      <h2>state修改</h2>
      <button @click="shopStore.count++">{{ shopStore.count }}</button>
      <button @click="shopStore.num++">{{ shopStore.num }}</button>
      <button @click="shopStore.$reset()">重置</button>
      <button @click="shopStore.$patch({count:100,num:1000})">patch</button>
      <button @click="shopStore.$patch((state)=>{
        state.count += 100;
        state.num += 100;
      })">patch</button>
      <hr>
      <button @click="userStore.age++">{{ userStore.age }}</button>
      <button @click="userStore.$patch({age:100})">patch</button>
    </div>
    <div>
      <h2>getter</h2>

    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router';
import {useUserStore,useShopStore,} from '@/store'
import {storeToRefs} from 'pinia'
const router = useRouter();
const routers = computed(()=>{
  return router.options.routes.filter(e=>e.path !== '/');
})
const userStore = useUserStore()
console.log(userStore.age);
console.log(userStore.getAge);
console.log(userStore.getName);
userStore.say(1)
userStore.f1(2)
userStore.f2(2)

const {name,age} = storeToRefs(userStore);
console.log(name.value);


const shopStore = useShopStore()
console.log(shopStore.count);
console.log(shopStore.title,'---------');
console.log(shopStore.g1,'---------');
console.log(shopStore.g2,'---------');
console.log(shopStore.g3(55),'---------');
console.log(shopStore.f1(),'---------');
console.log(shopStore.f2(),'---------');
</script>

<style lang="scss" scoped>
</style>