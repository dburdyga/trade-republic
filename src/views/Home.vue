<template>
  <div class="home">Streaming market data</div>
  <StockList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StockList from "@/components/stock/stock-list/StockList.vue";

export default defineComponent({
  name: "Home",
  components: { StockList },
});
</script>
