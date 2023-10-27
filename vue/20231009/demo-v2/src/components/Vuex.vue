<template>
  <div>
    <h2>Vuex</h2>
    <div>
      {{ $store.state.title }}
      <hr />
      {{ $store.state.user.title }}
    </div>
    <div>
      {{ $store.getters.rootG }}
      <hr />
      {{ $store.getters["user/userG"] }}
    </div>
    <div>
      {{ $store.state.num
      }}<button @click="$store.dispatch('add', 2)">root</button>
      <hr />
      {{ $store.state.user.num
      }}<button @click="$store.dispatch('user/add', 2)">user</button>
    </div>
    <div>
      <button @click="$store.commit('SET_TITLE', 'lili')">root</button>
      <hr />
      <button @click="$store.commit('user/SET_TITLE', 'wang')">user</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonVuex",

  data() {
    return {};
  },
  created(){
    this.$store.dispatch('f1');
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>