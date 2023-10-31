<template>
  <div>
    <BsButton @click="say" type="success" size="sm" :disabled="false" :outline="true"
      >提交</BsButton
    >
  </div>
</template>

<script>
import BsButton from '../../bu-ui/BsButton.vue';

export default {
  name: 'WorkspaceJsonButton',
  components: {
    BsButton,
  },
  data() {
    return {};
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
