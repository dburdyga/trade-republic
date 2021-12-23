<template>
  <select class="control" v-model="selected">
    <option v-for="item in items" :value="item" :key="item.id">
      {{ item }}
    </option>
  </select>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      selected: "BMG9156K1018",
      items: [
        "BMG9156K1018", "DE000BASF111", "BMG9156K1010"
      ],
      // items: [
      //   { label: "BMG9156K1018", key: "1" },
      //   { label: "DE000BASF111", key: "2" },
      // ],
    };
  },
});
</script>

<style lang="scss" scoped></style>
