<template>
  <div>
    <div>
      <button class="btn btn-primary" @click="showAdd()">添加用户</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>手机</th>
          <th>邮箱</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="v in userList" :key="v.id">
          <td>{{ v.username }}</td>
          <td>{{ v.phone }}</td>
          <td>{{ v.email }}</td>
          <td>{{ v.ctime }}</td>
          <td>
            <button class="btn btn-primary" @click="delUser(v.id)">删除</button>
            <button class="btn btn-primary" @click="showUpdate(v.id)">
              编辑
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <UserSave
      v-show="isUpdate"
      :type="type"
      :uid="id"
      :isUpdate.sync="isUpdate"
      @show="getUserList"
    ></UserSave>
  </div>
</template>

<script>
import { getUsersApi, delUsersApi } from "../api/users";
import UserSave from "./UserSave.vue";
export default {
  name: "UsersTable",
  props: {
    keyword: {
      type: String,
      default: "",
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  components: { UserSave },
  data() {
    return {
      userList: [],
      isUpdate: false,
      id: "",
      type: "update",
      limit: 4,
      parame: {
        _page: 1,
        _limit: 4,
      },
    };
  },
  created() {
    this.getUserList();
  },
  mounted() {},

  methods: {
    // 获取用户列表
    async getUserList() {
      const parame = {
        _page: this.page,
        _limit: this.limit,
      };
      this.userList = await getUsersApi(parame);
    },
    // 删除用户
    async delUser(id) {
      if (!confirm("是否确认删除")) return;
      await delUsersApi(id);
      this.userList = await getUsersApi();
    },
    showUpdate(id) {
      this.isUpdate = true;
      this.type = "update";
      this.id = id;
    },
    showAdd() {
      this.isUpdate = true;
      this.type = "add";
    },
  },
  watch: {
    async keyword() {
      if (this.keyword === "") {
        if (this.parame.username !== "") delete this.parame.username;
        console.log(this.parame);
        this.userList = await getUsersApi(this.parame);
      } else {
        // const parame = {
        //   _page: this.page,
        //   _limit: this.limit,
        //   username: this.keyword,
        // };
        this.parame.username = this.keyword;
        this.userList = await getUsersApi(this.parame);
      }
    },
    async page() {
      // const parame = {
      //   _page: this.page,
      //   _limit: this.limit,
      // };
      this.parame._page = this.page;
      this.parame._limit = this.limit;
      if (this.keyword !== "") this.parame.username = this.keyword;
      this.userList = await getUsersApi(this.parame);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>