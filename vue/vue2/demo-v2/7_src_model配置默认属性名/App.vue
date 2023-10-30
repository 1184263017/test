<template>
  <div>
    <h1>App</h1>
    <TsButton last-name="jsck" @sendFile="say"></TsButton>
    <!-- <TsButton last-name="jsck" @send-file="say"></TsButton> -->

    <!-- <TsInput :value="text" @input="text = $event"></TsInput> -->
    <TsInput v-model="text"></TsInput>
    {{ text }}
  </div>
</template>
 
<script>
import TsButton from "./components/TsButton.vue";
import TsSubmit from "./components/TsSubmit.vue";
import TsInput from "./components/TsInput.vue";
export default {
  name: "App",
  components: {
    TsButton,
    TsSubmit,
    TsInput,
  },
  data() {
    return {
      text: "hello",
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