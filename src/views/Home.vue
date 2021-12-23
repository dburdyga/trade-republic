<template>
  <div>
    <h1>Streaming market data</h1>
    <div class="home-content">
      <div class="home-section is-big">
        <StockList />
      </div>
      <div class="home-section">
        <StockAdd />
      </div>
    </div>
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
<style lang="scss">
.home {
  &-content {
    display: flex;
    margin-top: $building-unit_x4;
  }

  &-section {
    flex: 1;
    padding: 0 $building-unit-x2;

    &.is-big {
      flex: 2;
    }
  }
}
</style>
