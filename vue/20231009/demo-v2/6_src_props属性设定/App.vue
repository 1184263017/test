<template>
  <div>
    <h1>App</h1>
    <TsButton last-name="jsck"></TsButton>
    <TsSubmit
      count="10"
      username="jack"
      :isAdmin="true"
      :info="{ a: 1 }"
      :hobbys="[1, 2, 3]"
      :cb="() => {}"
      phone="15895961017"
    ></TsSubmit>
    <!-- <TsSubmit v-bind="obj"></TsSubmit> -->
  </div>
</template>
 
<script>
import TsButton from "./components/TsButton.vue";
import TsSubmit from "./components/TsSubmit.vue";
export default {
  name: "App",
  components: {
    TsButton,
    TsSubmit,
  },
  data() {
    return {
      obj: {
        count: 10,
        username: "jack",
        isAdmin: true,
        info: { a: 1 },
        hobbys: [1, 2, 3],
        cb: () => {},
      },
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