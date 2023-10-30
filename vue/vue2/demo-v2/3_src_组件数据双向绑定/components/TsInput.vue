<template>
  <div>
    <h2>Tsinput 子调用父方法并传参</h2>
    <hr />
    {{ title }}
    <hr />
    <input type="text" :value="title"/>
  </div>
</template>

<script>
export default {
  name: "Tsinput",
  props: ["title"],
  data() {
    return {
        tsTitle:'this is tsTitle'
    };
  },

  mounted() {
   this.fn()
  },

  methods: {
    fn(){
        this.$emit('sendTitle',this.tsTitle)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>