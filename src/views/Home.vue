<template>
  <div>
    <h1 class="home-header">Streaming market data</h1>
    <div class="home-content">
      <div class="home-section is-big">
        <StockList />
      </div>
      <div class="home-section home-form">
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
  height: 100vh;

  &-header {
    padding: 0 $building-unit-x2;
  }

  &-content {
    display: flex;
    margin-top: $building-unit_x4;
    height: 100vh;

    @media screen and (max-width: 600px) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }

  &-section {
    flex: 1;
    padding: 0 $building-unit-x4;

    &.is-big {
      flex: 2;
    }
  }

  &-form {
    border-left: 1px dashed $pale-light;

    @media screen and (max-width: 600px) {
      border-left: none;
    }
  }
}
</style>
