<template>
  <div>
    <h2>Vuex</h2>
    <div>
      {{ $store.state.title }}
      <input type="text" v-model="title" />
      <button @click="$store.state.title = 'xixixiix'">
        state直接修改属性(开启严格模式修改会报错)
      </button>
      <hr />
      {{ $store.state.user.title }}
    </div>
    <div>
      <button @click="$store.commit('SET_TITLE', 'tom')">
        SET_TITLE(root)
      </button>
      <hr />
      <button @click="$store.commit('user/SET_TITLE', 'lili')">
        SET_TITLE(user)
      </button>
    </div>
    <div>
      <button @click="$store.dispatch('add', 'shuai')">add(root)</button>
      <hr />
      <button @click="$store.dispatch('user/add', 'mei')">add(user)</button>
    </div>
    <div>
      <div>
        <ul>
          <li v-for="v in userList" :key="v.id">{{ v.username }}</li>
        </ul>
      </div>
      <button @click="$store.dispatch('getUsers')">getUserList</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WorkspaceJsonVuex",

  data() {
    return {};
  },
  computed: {
    ...mapState(["userList"]),
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.commit("SET_TITLE", value);
      },
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>