<template>
  <h2>Streaming market data</h2>
  <div>
    <StockList />
  </div>
  <div>
    <StockAdd />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StockList from "@/components/stock/stock-list/StockList.vue";
import StockAdd from "@/components/stock/stock-add/StockAdd.vue";

export default defineComponent({
  name: "Home",
  components: { StockAdd, StockList },
});
</script>
