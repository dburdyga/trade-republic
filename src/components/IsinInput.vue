<template>
  <div>
    <input
      v-model="isinId"
      placeholder="ISIN number"
      type="text"
      class="isin-id"
    />
    <button class="button">Send message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IsinInput",
  data() {
    return {
      isinId: "",
    };
  },
});
</script>

<style lang="scss">
.isin-id {
  font-size: 14px;
  margin: 10px 10px;
  padding: 8px 8px;
  border-radius: 4px;
  border: 1px solid grey;
  width: 150px;
}

.button {
  display: inline-block;
  padding: 8px 8px;
  margin: 10px 10px;
  border-radius: 4px;
  border: 0.16em solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.2s;
  background-color: black;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: grey;
  }
}
</style>
