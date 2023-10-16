<template>
  <div>
    <h2>TsSubmit</h2>
    {{ typeof count }}
    <hr />
    {{ username }}
    <hr />
    {{ isAdmin }}
    <hr />
    {{ info }}
    <hr />
    {{ hobbys }}
    <hr />
    {{ cb }}
    <hr />
    {{ phone }}
  </div>
</template>

<script>
export default {
  name: "TsSubmit",
  props: {
    count: [Number, String],
    username: {
      type: String, // 类型
      required: true, // 必填
      default: "timo", // 默认值
    },
    phone: {
      type: String,
      // 设置属性值验证
      validator: (value) => {
        // value 传入的参数值
        // return true // 通过
        // return false // 失败
        return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value);
      },
    },
    // isAdmin: Boolean,
    isAdmin:{
      type:undefined, // null和undefined表示不限制数据类型
    },
    info: Object,
    hobbys: Array,
    cb: Function,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>