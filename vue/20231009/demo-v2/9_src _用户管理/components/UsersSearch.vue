<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="输入用户姓名或者电话号码或者邮箱查询"
        v-model="key"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="search"
      >
        搜索
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersSearch",
  props: ["keyword"],
  data() {
    return {
      key: "",
    };
  },

  mounted() {},

  methods: {
    search() {
      this.$emit("update:keyword", this.key);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>