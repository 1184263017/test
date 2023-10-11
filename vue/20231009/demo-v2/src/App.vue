<template>
  <div>
    <h1>App</h1>
    <!-- <Home :title="title" @sendTitle="say"></Home> -->
    <!-- <Home :title="title" @sendTitle="(data)=>{
      title = data
    }"></Home> -->
    <!-- <Home :title="title" @sendTitle="title=$event"></Home> -->
    <Home v-model="title">
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </Home>
    {{ title }}
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  components: { Home },
  name: "App",

  data() {
    return {
      title: "118@qq.com",
    };
  },
  methods: {
    say(value) {
      console.log(value);
      this.title = value;
    },
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