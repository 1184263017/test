<template>
  <div>
    <BsCard :img-src="img" img-alt="这是好东西">
      <template v-slot:title>我是标题</template>
      <template>我是内容</template>
      <template #footer>
        <BsButton @click="say" type="success" size="sm" :disabled="false" :outline="true"
          >提交</BsButton
        >
      </template>
    </BsCard>
  </div>
</template>

<script>
import BsCard from '../../bu-ui/BsCard.vue';
import BsButton from '../../bu-ui/BsButton.vue';

export default {
  name: 'WorkspaceJsonCard',
  components: { BsCard, BsButton },
  data() {
    return {
      img: 'https://img2.baidu.com/it/u=861863691,2776527252&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    };
  },

  mounted() {},

  methods: {
    say(e) {
      console.log(123, e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
