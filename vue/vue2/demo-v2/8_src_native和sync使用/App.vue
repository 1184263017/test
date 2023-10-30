<template>
  <div>
    <h1>App</h1>
    <h2>当前页{{ num }}</h2>
    <h2>每页条数{{ count }}</h2>
    <h2>{{ obj }}</h2>
    <TsPay @click.native="say"></TsPay>
    <!-- <TsPage :active="num" @send:active="num = $event"></TsPage> -->
    <!-- <TsPage :active.sync="num" :size.sync="count"></TsPage> -->
    <TsPage v-bind.sync="obj"></TsPage>
  </div>
</template>
 
<script>
import TsPay from "./components/TsPay.vue";
import TsPage from "./components/TsPage.vue";
export default {
  name: "App",
  components: {
    TsPay,
    TsPage,
  },
  data() {
    return {
      num: 3,
      count: 20,
      obj: {
        active: 3,
        size: 20,
      },
    };
  },
  methods: {
    say() {
      console.log("hello say");
    },
  },
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