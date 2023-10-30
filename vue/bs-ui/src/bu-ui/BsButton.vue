<template>
  <div>
    <button
      type="button"
      :class="`btn btn-${outline ? `outline-${type}` : `${type}`} btn-${size}`"
      :disabled="disabled"
      @click="$emit('click', $event)"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceJsonBsButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
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
