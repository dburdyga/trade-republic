<template>
  <button class="button" :id="id" :type="type">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: () => "button",
    },
  },
});
</script>

<style scoped lang="scss">
.button {
  color: $black;
  cursor: pointer;
  font-size: $font-size-regular;
  background-color: transparent;
  border-radius: $border-radius;
  box-shadow: none;
  border: 1px solid $pale-light;
  padding: $building-unit-x1_5 $building-unit;
  transition: $default-transition;

  &:disabled {
    cursor: default;
    opacity: 0.4;
    pointer-events: none;
    user-select: none;
  }

  &.is-active {
    background-color: $green;
    color: $white;
    border: none;

    &:hover {
      background-color: $green-light;
    }
  }
}
</style>
