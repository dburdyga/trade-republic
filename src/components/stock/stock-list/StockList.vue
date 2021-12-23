<template>
  <div class="stock-list">
    <div v-if="stocks.length">
      <StockTimer />
    </div>
    <template v-if="stocks.length">
      <StockItem :key="stock.isin" v-for="stock in stocks" :stock="stock" />
    </template>
    <template v-else> Stock list is empty. Please add stock. </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Stock } from "@/lib/types/models/Stock";
import store from "@/store";
import StockTimer from "@/components/stock/stock-timer/StockTimer.vue";
import StockItem from "@/components/stock/stock-item/StockItem.vue";
import { GET_STOCKS } from "@/store/modules/stocks/constants";

export default defineComponent({
  components: {
    StockItem,
    StockTimer,
  },
  computed: {
    stocks(): Stock[] {
      return store.getters[GET_STOCKS];
    },
  },
});
</script>

<style scoped lang="scss">
  .stock-list {
  }
</style>
