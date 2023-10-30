<template>
  <div>
    <h1>App</h1>
    <TsCard>
      <b>this is ts card</b>
      <p>{{ content }}</p>
    </TsCard>
    <TsCard>
      <!-- 具名插槽简写 -->
      <template #default="scope">
        <h3>default slot</h3>
        {{ scope }}
      </template>
      <!-- 具名插槽简写 -->
      <template #a="scope">
        <h3>a slot</h3>
        {{ scope }}
      </template>
      <!-- 解构插槽  -->
      <template v-slot:b="{ email, phone }">
        <h3>b slot</h3>
        {{ email }}
        {{ phone }}
      </template>
      <!-- 动态插槽  -->
      <template v-slot:[sname]>
        <h3>c slot</h3>
      </template>
    </TsCard>
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
      sname: "c",
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