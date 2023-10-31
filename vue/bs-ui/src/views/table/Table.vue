<template>
  <div>
    <BsTable backColor="success" :theadData="theadData">
      <template #tbody>
        <tr v-for="v in arr" :key="v.id">
          <td>{{ v.t1 }}</td>
          <td>{{ v.t2 }}</td>
          <td>{{ v.t3 }}</td>
          <td>{{ v.t4 }}</td>
        </tr>
      </template>
    </BsTable>
  </div>
</template>

<script>
import BsTable from '../../bu-ui/BsTable.vue';

export default {
  name: 'WorkspaceJsonTable',
  components: { BsTable },
  data() {
    return {
      arr: [
        {
          id: 1,
          t1: 1,
          t2: 2,
          t3: 3,
          t4: 4,
        },
        {
          id: 2,
          t1: 1,
          t2: 2,
          t3: 3,
          t4: 4,
        },
        {
          id: 3,
          t1: 1,
          t2: 2,
          t3: 3,
          t4: 4,
        },
        {
          id: 4,
          t1: 1,
          t2: 2,
          t3: 3,
          t4: 4,
        },
      ],
      theadData: ['标题1', '标题2', '标题3', '标题4'],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
