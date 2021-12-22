<template>
  <form class="stock-add">
    <Input id="isin" label="ISIN" placeholder="Add ISIN" v-model:modelValue="isin" />
    <Button @click="subscribeStock">Subscribe</Button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { SUBSCRIBE_STOCK } from "@/store/modules/stocks/constants";

export default defineComponent({
  data() {
    return {
      isin: "",
    };
  },
  methods: {
    subscribeStock() {
      store.dispatch(SUBSCRIBE_STOCK, this.isin);
      this.isin = "";
    },
  },
});
</script>

<style lang="scss" scoped>
.stock-add {
}
</style>
