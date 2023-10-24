<template>
  <div>
    <div class="menu">
      <div class="d1"></div>
      <div class="d2">
        <ul>
          <li v-for="(v, k) in menu" :key="k">
            {{ v.title }}
            <ul>
              <li
                v-for="(v1, k1) in v.submenu"
                :key="k1"
                @click="save(v1, v.title)"
              >
                <!-- <router-link :to="'/main/' + v.title + '?son=' + v1">{{
                  v1
                }}</router-link> -->
                <router-link :to="'/main/a?title=' + v.title + '&son=' + v1">{{
                  v1
                }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="d3">
        <div class="username">admin</div>
      </div>
    </div>
    <!-- <MainBody></MainBody>/ -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import MainBody from "./MainBody.vue";
export default {
  name: "WorkspaceJsonHome",
  // components: { MainBody },
  data() {
    return {
      menu: [
        {
          title: "菜单一",
          submenu: ["菜单1-1", "菜单1-2"],
        },
        {
          title: "菜单二",
          submenu: ["菜单2-1", "菜单2-2"],
        },
        {
          title: "菜单三",
          submenu: ["菜单3-1", "菜单3-2"],
        },
        {
          title: "菜单四",
          submenu: ["菜单4-1", "菜单4-2"],
        },
        {
          title: "菜单五",
          submenu: ["菜单5-1", "菜单5-2"],
        },
        {
          title: "菜单六",
          submenu: ["菜单6-1", "菜单6-2"],
        },
        {
          title: "菜单七",
          submenu: ["菜单7-1", "菜单7-2", "菜单7-3"],
        },
      ],
      nav: "",
      father: "",
    };
  },

  mounted() {},

  methods: {
    save(v, v1) {
      this.nav = v;
      this.father = v1;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
.menu {
  position: absolute;
  left: 0;
  right: 0;
  height: 8vh;
  background: url("../assets/imgs/图片3.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  .d1 {
    width: 38vw;
    height: 100%;
    // background-color: red;
  }
  .d2 {
    flex: 1;
    height: 100%;
    padding-top: 8px;
    box-sizing: border-box;
    > ul {
      width: 100%;
      height: 100%;
      list-style: none;
      display: flex;
      > li {
        background-color: red;
        flex: 1;
        height: 100%;
        background: url("../assets/imgs/图片2.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        margin-left: -33px;
        position: relative;
        &:hover {
          background: url("../assets/imgs/图片1.png") no-repeat;
          background-size: 100% 100%;
          > ul {
            display: block;
          }
        }
        > ul {
          position: absolute;
          z-index: 99;
          top: 92%;
          left: 9px;
          list-style: none;
          display: flex;
          flex-direction: column;
          width: 65%;
          padding-top: 10px;
          // box-sizing: border-box;
          display: none;
          > li {
            padding-top: 10px;
            height: 30px;
            text-align: center;
            background-color: rgb(3, 35, 113);
          }
        }
      }
    }
  }
  .d3 {
    width: 5vw;
    height: 100%;
    // background-color: red;
    .username {
      margin-top: 8px;
      height: 100%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -33px;
    }
  }
}
</style>