<template>
  <div>
    <h2>Vuex</h2>
    <input type="text" v-model="title" />
    {{ $store.state.title }}
    {{ title }}
    <hr />
    {{ $store.getters.getName }}
    {{ name }}
    <hr />
    {{ $store.state.count }}
    <input type="text" v-model="num" />
    <button @click="SET_COUNT">count++</button>
    <hr />
    {{ $store.state.title }}
    <input type="text" v-model="titleNew" />
    <button @click="SET_TITLE">savetitle</button>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonVuex",

  data() {
    return {
      num: 0,
      titleNew: "",
    };
  },

  mounted() {},

  methods: {
    SET_COUNT() {
      this.$store.commit("SET_COUNT", +this.num);
    },
    SET_TITLE() {
      this.$store.commit("SET_TITLE", this.titleNew);
    },
  },
  computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.state.title = value;
      },
    },
    name() {
      return this.$store.getters.getName;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>