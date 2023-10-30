<template>
  <div>
    <div class="card" style="width: 18rem">
      <img :src="imgSrc" class="card-img-top" :alt="imgAlt" />
      <div class="card-body">
        <h5 class="card-title"><slot name="title">Card title</slot></h5>
        <p class="card-text">
          <slot
            >Some quick example text to build on the card title and make up the bulk of the card's
            content.</slot
          >
        </p>
        <slot name="footer">
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BsCard',
  props: ['imgSrc', 'imgAlt'],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
