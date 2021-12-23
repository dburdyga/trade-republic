<template>
  <div class="stock-select">
    <label class="is-secondary-color is-caption label" v-if="label">
      {{ label }}
    </label>
    <select class="control" v-model="selected">
      <option v-for="isin in isins" :value="isin" :key="isin.id">
        {{ isin }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      selected: "BMG9156K1018",
      isins: ["BMG9156K1018", "DE000BASF111", "BMG9156K1010"],
      // isins: [
      //   { label: "BMG9156K1018", key: "1" },
      //   { label: "DE000BASF111", key: "2" },
      // ],
    };
  },
  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.stock-select {
  display: flex;
  flex-direction: column;
  margin-bottom: $building-unit_x2;
}
</style>
