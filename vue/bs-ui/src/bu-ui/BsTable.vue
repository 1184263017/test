<template>
  <div>
    <table class="table table-striped" :class="`table-${backColor}`">
      <thead>
        <tr>
          <th v-for="(v, i) in theadData" :key="i">{{ v }}</th>
        </tr>
      </thead>
      <tbody>
        <slot name="tbody">
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceJsonBsTable',
  props: {
    theadData: {
      type: Array,
      default: () => ['#', 'First', 'Last', 'Handle'],
    },
    backColor: {
      type: String,
      default: 'dark ',
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
