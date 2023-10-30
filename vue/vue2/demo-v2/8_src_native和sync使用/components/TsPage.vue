<template>
  <div>
    <h2>分页</h2>
    <ul>
      <li :class="{ active: active === 1 }" @click="$emit('update:active', 1)">
        1
      </li>
      <li :class="{ active: active === 2 }" @click="$emit('update:active', 2)">
        2
      </li>
      <li :class="{ active: active === 3 }" @click="$emit('update:active', 3)">
        3
      </li>
      <li :class="{ active: active === 4 }" @click="$emit('update:active', 4)">
        4
      </li>
    </ul>

    <select
      name=""
      id=""
      :value="size"
      @change="$emit('update:size', $event.target.value)"
    >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TsPay",
  props: {
    active: {
      type: Number,
      default: 1,
    },
    size: {
      type: [Number, String],
      default: 10,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: nowrap;
  li {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    &:active {
      background-color: skyblue;
    }
  }
  .active {
    background-color: skyblue;
  }
}
</style>