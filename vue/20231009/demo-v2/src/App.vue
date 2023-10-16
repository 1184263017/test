<template>
  <div>
    <h1>App</h1>
    <TsCard>
      <b>this is ts card</b>
      <p>{{ content }}</p>
    </TsCard>
    <TsCard></TsCard>
  </div>
</template>

<script>
import TsCard from "./components/TsCard.vue";
export default {
  name: "WorkspaceJsonApp",
  components: {
    TsCard,
  },
  data() {
    return {
      content: "this is content App",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
</style>