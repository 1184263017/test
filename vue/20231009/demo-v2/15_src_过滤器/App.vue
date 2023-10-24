<template>
  <div>
    <h1>App</h1>
    {{ gender }}
    <hr />
    {{ formatGender(gender) }}
    <hr />
    {{ fGender }}
    <hr />
    <!-- fGender(gender) -->
    {{ gender | fGender | gai }}
    <hr />
    <!-- add(100,10) -->
    {{ 100 | add(10) }}
    <hr />
    <!-- add(100,10) -->
    {{ 100 | add(10) | add(30) | sub(10) | abc }}
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      gender: 1,
    };
  },

  mounted() {},

  methods: {
    formatGender(value) {
      return value == 1 ? "男" : "女";
    },
  },
  computed: {
    fGender() {
      return this.gender == 1 ? "男" : "女";
    },
  },
  filters: {
    fGender(v) {
      return v == 1 ? "男" : "女";
    },
    gai(v) {
      return v == "男" ? "boy" : "girel";
    },
    add(v, a) {
      return v + a;
    },
    sub(v, a) {
      return v - a;
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