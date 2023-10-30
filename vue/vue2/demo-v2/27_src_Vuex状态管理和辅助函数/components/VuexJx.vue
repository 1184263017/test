<template>
  <div>
    <h2>VuexJx</h2>
    <div>
      <h3>简化state</h3>
      root/title:{{ title }}
      <hr />
      a/title:{{ aTitle }}
      <hr />
      a/a1/title:{{ a1Title }}
    </div>
    <div>
      <h3>简化getters</h3>
      root/g:{{ g }}
      <hr />
      a/ga:{{ ga }}
      <hr />
      a/a1/ga1:{{ ga1 }}
      <hr />
    </div>
    <div>
      <h3>简化mutations</h3>
      root/SETR:<button @click="SETR">root/SETR</button>
      <hr />
      a/SETA:<button @click="SETA">a/SETA</button>
      <hr />
      a/a1/SETAA1:<button @click="SETAA1">a/a1/SETAA1</button>
      <hr />
    </div>
    <div>
      <h3>简化actions</h3>
      root/addRoot:<button @click="addRoot(1)">root/addRoot</button>
      <hr />
      a/addA:<button @click="addA(2)">a/addA</button>
      <hr />
      a/a1/addAA1:<button @click="addAA1(3)">a/a1/addAA1</button>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "WorkspaceJsonVuexJx",

  data() {
    return {};
  },
  computed: {
    /* state 简写 */
    // 必须属性名和state名相同才能简写
    ...mapState(["title"]),
    ...mapState({
      //   title: (state) => state.title,
      //   aTitle: (state) => state.a.title,
      //   a1Title: (state) => state.a.a1.title,
      //   title: "title",
    }),
    ...mapState("a", {
      aTitle: "title",
    }),
    ...mapState("a/a1", {
      a1Title: "title",
    }),

    /* getters 简写 */
    // ...mapGetters({ g: "g" }),
    ...mapGetters(["g"]),
    // ...mapGetters("a", { ga: "ga" }),
    ...mapGetters("a", ["ga"]),
    ...mapGetters("a/a1", ["ga1"]),
  },
  mounted() {},

  methods: {
    /* mutations 简写 */
    // ...mapMutations({ SETR: "SETR" }),
    ...mapMutations(["SETR"]),
    ...mapMutations("a", ["SETA"]),
    ...mapMutations("a/a1", ["SETAA1"]),

    /* actions 简写 */
    // ...mapMutations({ addRoot: "addRoot" }),
    ...mapActions(["addRoot"]),
    ...mapActions("a", ["addA"]),
    ...mapActions("a/a1", ["addAA1"]),
  },
};
</script>

<style lang="scss" scoped>
</style>