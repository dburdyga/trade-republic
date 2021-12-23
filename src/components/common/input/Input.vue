<template>
  <div class="input-component">
    <label
      class="is-secondary-color is-caption input-label"
      :class="{ 'is-invalid': !isValid }"
      v-if="label"
      :for="id"
      >{{ label }}</label
    >
    <input
      class="input-control"
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
      default: false,
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

  &-label {
    margin-bottom: $building-unit_0_5;
    padding-left: 2px;

    &.is-invalid {
      color: $red;
    }
  }

  &-control {
    border: 1px solid $pale-light;
    border-radius: $border-radius;
    font-size: $font-size-regular;
    padding: $building-unit $building-unit_x2;
    outline: none;
    transition: $default-transition;

    &.is-invalid {
      border: 1px solid $red;
      color: $red;

      &::placeholder {
        color: $red;
      }

      &:focus {
        outline: 1px solid $red;
        border: 1px solid $red;
      }
    }

    &:focus {
      outline: 1px solid $pale;
      border: 1px solid $pale;
    }

    &::placeholder {
      color: $pale;
    }
  }
}
</style>
