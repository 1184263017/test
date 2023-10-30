<template>
  <div>
    <h2>Vuex(state,getters,mutations)</h2>
    <input type="text" v-model="title" />
    <!-- {{ $store.state.title }} -->
    {{ title }}
    <hr />
    {{ $store.getters.fullName }}
    {{ fullName }}
    <hr />
    {{ $store.state.count }}
    <hr />
    <button @click="$store.commit('SAY')">say</button>
    <button @click="$store.commit('ADD', 300)">add</button>
    <button @click="$store.commit('SET_COUNT', 2)">count++</button>
    <button @click="SET_COUNT(2)">count++</button>
    <button @click="$store.commit('SET_TITLE', 'hello app')">SET_TITLE</button>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonVuex",

  data() {
    return {};
  },

  mounted() {},
  computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.state.title = value;
      },
    },
    fullName() {
      return this.$store.getters.fullName;
    },
  },
  methods: {
    SET_COUNT(num) {
      this.$store.commit(SET_COUNT, num);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>