<template>
  <div class="hamburger js-hover" @click="toggle">
    <div class="hamburger__line hamburger__line--01">
      <div class="hamburger__line-in hamburger__line-in--01"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
      // Emit an event to notify other components about the state change
      this.$emit('toggle');
    },
  },
};
</script>