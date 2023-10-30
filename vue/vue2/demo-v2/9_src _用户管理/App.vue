<template>
  <div>
    <h1>用户管理</h1>
    <UsersSearch :keyword.sync="keyword"></UsersSearch>
    <UsersTable :keyword="keyword" :page="page"></UsersTable>
    <UserPage :page.sync="page" :keyword="keyword"></UserPage>
  </div>
</template>

<script>
import UsersSearch from "./components/UsersSearch.vue";
import UserPage from "./components/UserPage.vue";
import UsersTable from "./components/UsersTable.vue";
export default {
  name: "App",
  components: {
    UsersSearch,
    UserPage,
    UsersTable,
  },
  data() {
    return {
      keyword: "",
      page: 1,
    };
  },

  mounted() {},
  watch: {
    keyword() {
      // console.log(this.keyword);
    },
    page() {
      // console.log(this.page);
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>