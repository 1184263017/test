<template>
  <div>
    <h1>App {{ title }}</h1>
    <button @click="say">say</button>
  </div>
</template>

<!-- <script>
export default {
  name: "WorkspaceJsonApp",

  data() {
    return {};
  },

  mounted() { },

  methods: {
    say() {
      console.log('hahahah')
    }
  },
};
</script> -->

<!-- <script>
import Skeleton from './components/Skeleton.vue'
export default {
  components: { Skeleton },
  setup() {
    const title = 'hello';
    function say(params) {
      console.log('hello jack');
    };
    return {
      title,
      say,
    }
  }
}
</script> -->

<script setup>
import { defineAsyncComponent, ref } from 'vue';
const title = 'hello';
function say(params) {
  console.log('hello jack');
};
const TsCard = defineAsyncComponent(() => import('./components/TsCard.vue'))
</script>



<style lang="scss" scoped></style>