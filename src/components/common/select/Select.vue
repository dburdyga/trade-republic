<template>
  <div class="stock-select">
    <label class="is-secondary-color is-caption label" v-if="label">
      {{ label }}
    </label>
    <select :id="id" class="control" v-model="value">
      <option value="" v-if="placeholder">{{ placeholder }}</option>
      <option v-for="item in items" :value="item.value" :key="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SelectItem } from "@/lib/types/ui/SelectItem";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
    items: {
      type: Array as PropType<SelectItem[]>,
      required: true,
    },
    id: {
      type: String,
      required: true,
      default: "select-id",
    },
    placeholder: {
      type: String,
      required: false,
      default: "Select item",
    },
    modelValue: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(newValue: string) {
        this.$emit("update:modelValue", newValue);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.stock-select {
  display: flex;
  flex-direction: column;
}
</style>
