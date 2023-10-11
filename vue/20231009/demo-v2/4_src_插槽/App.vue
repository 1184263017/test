<template>
  <div>
    <h1>App</h1>
    <!-- TsCart 有插槽 -->
    <TsCart>
      <!-- 插槽内容 -->
      <template>
        <h2>hello slot</h2>
      </template>
    </TsCart>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
</style>