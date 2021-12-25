<template>
  <div class="input-component">
    <label
      class="is-secondary-color is-caption label"
      :class="{ 'is-invalid': !isValid }"
      v-if="label"
      :for="id"
      >{{ label }}</label
    >
    <input
      class="control"
      :class="{ 'is-invalid': !isValid }"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
  },
  model: {
    prop: "value",
    event: "input",
  },
});
</script>

<style scoped lang="scss">
.input {
  &-component {
    display: flex;
    flex-direction: column;
  }
}
</style>
