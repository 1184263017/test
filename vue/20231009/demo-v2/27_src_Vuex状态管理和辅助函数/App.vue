<template>
  <div>
    <!-- <router-view></router-view> -->
    <Vuex></Vuex>
    <!-- <Action></Action> -->
    <VuexJx></VuexJx>
  </div>
</template>

<script>
import { SET_COUNT } from "./store/mutations";
export default {
  components: {
    Vuex: () => import("./components/Vuex.vue"),
    Action: () => import("./components/Action.vue"),
    VuexJx: () => import("./components/VuexJx.vue"),
  },
  name: "App",
  data() {
    return {};
  },

  mounted() {
    console.log(this.$store);
    console.log(this.$store.state.title);
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

<style lang="scss">
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
</style>