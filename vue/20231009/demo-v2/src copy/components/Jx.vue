<template>
  <div>
    <h2>Jx</h2>
    <div>
      {{ title }}-{{ num }}
      <hr />
      {{ userTitle }}-{{ userNum }}
    </div>
    <div>
      {{ rootG }}
      {{ userG }}
    </div>
    <div>
      <button @click="add(2)">rootActions</button>
      <button @click="userAdd(4)">userActions</button>
    </div>
    <div>
      <button @click="SET_TITLE('liu')">rootMutations</button>
      <button @click="USER_SET_TITLE('wang')">userMutations</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "WorkspaceJsonJx",

  data() {
    return {};
  },

  mounted() {},
  computed: {
    ...mapState(["title", "num"]),
    ...mapState("user", { userTitle: "title", userNum: "num" }),
    ...mapGetters(["rootG"]),
    ...mapGetters("user", ["userG"]),
  },
  methods: {
    ...mapActions(["add"]),
    ...mapActions("user", { userAdd: "add" }),
    ...mapMutations(["SET_TITLE"]),
    ...mapMutations("user", { USER_SET_TITLE: "SET_TITLE" }),
  },
};
</script>

<style lang="scss" scoped>
</style>