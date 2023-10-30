<template>
  <div>
    <h2>Action</h2>
    <div>
      rootState:{{ $store.state.title }}
      <hr />
      rootGetters:{{ $store.getters.g1 }}
    </div>

    <div>
      <hr />
      userState:{{ $store.state.user.username }}
      <hr />
      <!-- 开启名空间 -->
      userGetters:{{ $store.getters["user/getAge"] }}
      <hr />
      <button @click="$store.commit('user/SET_USERNAME', 'tom')">
        userMutations
      </button>
      <button @click="$store.dispatch('user/add', 2)">userActions</button>
    </div>

    <!-- 开启名空间 -->
    <div>
      bState::{{ $store.state.b.title }}
      <hr />
      bGetters:{{ $store.getters["b/getTitle"] }} bGetters:{{
        $store.getters["b/getB1"]
      }}
      <hr />
      <button @click="$store.commit('b/SET_TITLE', 'hahaha')">
        bMutations
      </button>
      <button @click="$store.dispatch('b/add', { a: 1, b: 2 })">
        bActions
      </button>
    </div>

    <div>
      <!-- 不开命名空间 -->
      cGetters:{{ $store.getters.getTitleC }}
      <hr />
      <button @click="$store.dispatch('addC', { a: 1, b: 2 })">cActions</button>
    </div>

    <div>
      <button @click="$store.dispatch('add', 2000)">add</button>
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonAction",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    add() {
      this.$store
        .dispatch("add", 1000)
        .then((data) => console.log("then", data))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>