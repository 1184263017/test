<template>
  <div>
    <router-view></router-view>
    <!--     <BsButton @click="say" type="success" size="sm" :disabled="false" :outline="true"
      >提交</BsButton
    >
    <hr />
    <BsCard :img-src="img" img-alt="这是好东西">
      <template v-slot:title>我是标题</template>
      <template>我是内容</template>
      <template #footer>
        <BsButton @click="say" type="success" size="sm" :disabled="false" :outline="true"
          >提交</BsButton
        >
      </template>
    </BsCard>
    <hr />
    <BsCardGroup>
      <BsCard :img-src="img" img-alt="这是好东西">
        <template v-slot:title>我是标题</template>
        <template>我是内容</template>
        <template #footer>
          <BsButton @click="say" type="success" size="sm" :disabled="false" :outline="true"
            >提交</BsButton
          >
        </template>
      </BsCard>
      <BsCard :img-src="img" img-alt="这是好东西">
        <template v-slot:title>我是标题</template>
        <template>我是内容</template>
        <template #footer>
          <BsButton @click="say" type="success" size="sm" :disabled="false" :outline="true"
            >提交</BsButton
          >
        </template>
      </BsCard>
    </BsCardGroup>
    <BsTable backColor="success" :theadData="theadData">
      <template #tbody>
        <tr v-for="v in arr" :key="v.id">
          <td>{{ v.t1 }}</td>
          <td>{{ v.t2 }}</td>
          <td>{{ v.t3 }}</td>
          <td>{{ v.t4 }}</td>
        </tr>
      </template>
    </BsTable> -->
  </div>
</template>

<script>
// import BsButton from './bu-ui/BsButton.vue';
// import BsCard from './bu-ui/BsCard.vue';
// import BsCardGroup from './bu-ui/BsCardGroup.vue';
// import BsTable from './bu-ui/BsTable.vue';

export default {
  name: 'App',
  data() {
    return {
      img: 'https://img2.baidu.com/it/u=861863691,2776527252&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
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
  // components: {
  //   BsButton,
  //   BsCard,
  //   BsCardGroup,
  //   BsTable,
  // },
  methods: {
    say(e) {
      console.log(123, e);
    },
  },
};
</script>

<style lang="scss">
// div {
//   margin: 10px;
//   padding: 10px;
//   border: solid;
// }
</style>
