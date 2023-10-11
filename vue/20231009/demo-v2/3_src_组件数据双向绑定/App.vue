<template>
  <div>
    <h1>App</h1>
    <!-- <button ref="rButton" @click="say">click</button> -->

    <!-- success:自定义事件 -->
    <Pay ref="rPay" @success="say" @error="say" />
    <WxPay ref="rPay" @success="say" @error="say" />
    <TsInput :title="Ttitle" @sendTitle="send" />
    <hr />
    {{ tsTitle }}
    <hr />
    <!-- <TsEmail :value="email" @input="saveEamil" /> -->
    <!-- <TsEmail :value="email" @input="email = $event" /> -->
    <!-- <TsEmail
      :value="email"
      @input="
        (data) => {
          email = data;
        }
      "
    /> -->
    <!-- 语法糖 -->
    <TsEmail v-model="email" />
    {{ email }}
    <hr />
  </div>
</template>

<script>
import WxPay from "./components/WxPay.vue";
export default {
  components: { WxPay },
  name: "App",

  data() {
    return {
      Ttitle: "hello Ts",
      tsTitle: "",
      email: "118@qq.com",
    };
  },

  mounted() {},

  methods: {
    say(value, v1) {
      console.log("say hello", value, v1);
    },
    send(value) {
      this.tsTitle = value;
    },
    saveEamil(value) {
      console.log(value);
      this.email = value;
    },
    getPayNode() {
      // this = App = new vue();

      // $refs 收集所有的ref
      this.$refs.rPay.$emit("success", "pay", "oo");
    },
  },
  // 对象数据创建触发
  created() {
    // this.getPayNode()
  },
  // 渲染完成时触发
  mounted() {
    this.getPayNode();
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