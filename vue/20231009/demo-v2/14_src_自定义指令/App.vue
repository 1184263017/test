<template>
  <div>
    <h1>App</h1>
    {{ sonobj }}
    <div v-css:color="'red'">hello div</div>
    <p v-css:backgroundColor.b.i="'skyblue'">hello p</p>
    <p v-css:fontSize.i="'30px'">hello p</p>
    <!-- <TsC v-css></TsC> -->
    <!-- <button @click="cname='sss'">111</button>
    <component :is="cname" v-css></component> -->
    <button @click="flag = !flag">flag</button>
    <div v-if="flag" v-d1:color.i="'red'">局部指令</div>
    <div v-clock v-if="flag"></div>
    <div v-d2>{{ count }}</div>
    <!-- <test v-model="sonobj"></test> -->
  </div>
</template>

<script>
import dayjs from "dayjs";
let h = "";
export default {
  name: "WorkspaceJsonApp",
  components: {
    test:()=> import('./components/test.vue'),
    TsC: () => import("./components/TsC.vue"),
  },
  directives: {
    d1: {
      bind(el, binding, vnode) {
        el.style.color = "red";
        console.log("bind");
      },
      inserted() {
        console.log("inserted");
      },
      update() {
        console.log("update");
      },
      unbind(el, binding, vnode) {
        console.log("unbind");
      },
    },
    // 只有inserted时可以简写
    d2: function (el, binding, vnode) {
      console.log(vnode.context.count);
      setTimeout(() => {
        vnode.context.count++
      }, 3000);
    },
    // d2: {
    //   inserted() {},
    // },

    clock: {
      bind(el) {
        // console.log(this);
        // h = setInterval(() => {
        //   console.log("xixixi");
        //   el.innerHTML = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
        // }, 1000);
      },
      unbind() {
        // clearInterval(h);
      },
    },
  },
  data() {
    return {
      cname: "TsC",
      flag: true,
      h: "",
      count: 10,
      sonobj:{
        message:'hhhh',
        count:10
      }
    };
  },

  mounted() {
    // console.log(this);
  },

  methods: {
    say() {
      console.log(this);
    },
  },
};
</script>


<style lang="scss" scoped>
div {
  padding: 10px;
  margin: 10px;
  border: solid;
}
</style>