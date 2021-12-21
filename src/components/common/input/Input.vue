<template>
  <div class="input-component">
    <label v-if="label" :for="id">{{ label }}</label>
    <input :id="id" :placeholder="placeholder" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
      default: "input-id",
    },
    placeholder: {
      type: String,
      required: false,
      default: "Input data",
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    isValid: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
});
</script>

<style scoped lang="scss">
.input-component {
  display: flex;
}
</style>
