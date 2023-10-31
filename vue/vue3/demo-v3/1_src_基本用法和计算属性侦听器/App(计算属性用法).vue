<template>
  <div>
    <h1>App</h1>
    lastName:{{ lastName }}
    <hr>
    firstName:{{ firstName }}
    <hr>
    fullName:{{ fullNanme }}
    <hr>
    <button @click="fullNanme = 'xixi wang'">save fullName</button>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
// ref 返回的是一个对象 
const lastName = ref('li');
const firstName = ref('jack');
// const fullNanme = `${lastName.value} - ${firstName.value}`

// const fullNanme = computed(() => {
//   return `${lastName.value} - ${firstName.value}`;
// })
const fullNanme = computed({
  get() {
    return `${lastName.value} - ${firstName.value}`;
  },
  set(value) {
    [lastName.value, firstName.value] = value.split(' ');
  }
})
</script>


<style lang="scss" scoped></style>