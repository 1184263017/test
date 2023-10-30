<template>
    <div>
      <h2> </h2>
      <input type="text" v-model="value.message">
      <button type="button" @click="value.count++">{{ value.count }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props:['value'],
    name: "WorkspaceJsonTsC",
    data() {
      return {};
    },
  
    mounted() {},
  
    methods: {},
  };
  </script>
  
  <style lang="scss" scoped>
  </style>