<template>
  <div>
    <div class="menu">
      <div class="d1"></div>
      <div class="d2">
        <ul>
          <li v-for="v in routers" :key="v.name">
            <router-link :to="{ name: v.name }">{{ v.meta.name }}</router-link>
            <ul>
              <li v-for="v1 in v.children" :key="v1.name">
                <router-link :to="{ name: v1.name }">{{
                  v1.meta.name
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
    <router-view></router-view>
  </div>
</template>
  
  <script>
export default {
  name: "Home",
  data() {
    return {
      nav: "",
      father: "",
    };
  },

  mounted() {},
  computed: {
    routers() {
      return this.$router.options.routes.filter((el) => el.path != "/");
    },
  },
  methods: {
    save(v, v1) {
      this.nav = v;
      this.father = v1;
    },
  },
};
</script>
  
  <style lang="scss" scoped>
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