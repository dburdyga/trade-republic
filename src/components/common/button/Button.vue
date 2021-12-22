<template>
  <button :id="id" :type="type">
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

<style scoped></style>
