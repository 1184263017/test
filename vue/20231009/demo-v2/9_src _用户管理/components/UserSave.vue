<template>
  <div>
    <div class="update">
      <form action="">
        <span @click.prevent="$emit('update:isUpdate', false)">X</span>
        <div>
          <div class="mb-1 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >用户姓名</label
            >
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="userInfo.username"
              />
            </div>
          </div>
          <div class="mb-1 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >电话号码</label
            >
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="userInfo.phone"
              />
            </div>
          </div>
          <div class="mb-1 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >邮箱</label
            >
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="userInfo.email"
              />
            </div>
          </div>
          <div class="button">
            <button
              v-if="type == 'update'"
              class="btn btn-primary"
              @click.prevent="saveUser"
            >
              提交
            </button>
            <button v-else class="btn btn-primary" @click.prevent="addUser">
              提交
            </button>
            <button
              class="btn btn-primary"
              @click.prevent="$emit('update:isUpdate', false)"
            >
              取消
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getUsersApi, addUserApi, saveUsersApi } from "../api/users";
import dayjs from "dayjs";
export default {
  name: "WorkspaceJsonUserSave",
  props: ["uid", "type"],
  data() {
    return {
      userInfo: {
        username: "",
        phone: "",
        email: "",
      },
    };
  },
  created() {},
  mounted() {},
  watch: {
    uid() {
      this.getUserInfo();
    },
    type() {
      if (this.type != "update") {
        this.userInfo = {
          username: "",
          phone: "",
          email: "",
        };
      }
    },
  },
  methods: {
    // 获取用户列表
    async getUserInfo() {
      const res = await getUsersApi({ id: this.uid });
      this.userInfo = res[0];
    },
    async saveUser() {
      this.userInfo.ctime = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
      await saveUsersApi(this.uid, JSON.stringify(this.userInfo));
      this.$emit("show");
      this.$emit("update:isUpdate", false);
    },
    async addUser() {
      this.userInfo.ctime = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
      await addUserApi(JSON.stringify(this.userInfo));
      this.$emit("show");
      this.$emit("update:isUpdate", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.update {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: solid;
  background-color: rgba(57, 53, 53, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  > form {
    border: solid;
    width: 50vw;
    height: 50vh;
    background-color: white;
    position: relative;
    > span {
      position: absolute;
      top: 20px;
      right: 10px;
    }
    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // border: solid;
      width: 50%;
      > div {
        margin-top: 10px;
        // border: solid;
        > label {
          width: 100px;
        }
      }
      .button {
        margin-top: 10px;
        // border: solid;
        display: flex;
        justify-content: center;
        align-items: center;
        > button {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>