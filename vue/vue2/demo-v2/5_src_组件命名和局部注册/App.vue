<template>
  <div>
    <h1>App</h1>
    <!-- <TsHome>
      <h2>
        驼峰命名 <i>{{ tf }}</i>
      </h2>
    </TsHome>
    <ts-card></ts-card>
    <ts-home>
      <h2>
        短横线命名 <i>{{ dx }}</i>
      </h2>
    </ts-home> -->
    <TsButton></TsButton>
  </div>
</template>
 
<script>
import TsButton from "./components/TsButton.vue";
export default {
  name: "App",
  components: {
    TsButton,
  },
  data() {
    return {
      tf: "<TsHome>",
      dx: "<ts-home>",
    };
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
</style>