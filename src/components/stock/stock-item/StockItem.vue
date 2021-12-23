<template>
  <div class="stock">
    <div class="stock-container">
      <div class="stock-item">
        <p class="stock-item-title">ISIN</p>
        <p class="stock-item-value">{{ stock.isin }}</p>
      </div>
      <div class="stock-item">
        <p class="stock-item-title">Price</p>
        <p class="stock-item-value">{{ formattedPrice }}</p>
      </div>
    </div>
    <Button class="stock-button" @click="unsubscribeStock">
      <SvgIcon name="delete" />
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Stock } from "@/lib/types/models/Stock";
import { convertNumberToCurrency } from "@/lib/formatters/number.formatter";
import store from "@/store";
import { UNSUBSCRIBE_STOCK } from "@/store/modules/stocks/constants";

export default defineComponent({
  props: {
    stock: {
      type: Object as () => Stock,
      required: true,
    },
  },
  computed: {
    formattedPrice(): string {
      return convertNumberToCurrency(this.stock.price);
    },
  },
  methods: {
    unsubscribeStock() {
      store.dispatch(UNSUBSCRIBE_STOCK, this.stock.isin);
    },
  },
});
</script>

<style scoped lang="scss">
.stock {
  display: flex;
  align-items: center;
  margin-top: $building-unit_x2;

  &-container {
    display: flex;
    align-items: center;
    width: 250px;
    border: 1px solid $pale-light;
    border-radius: $border-radius;
    padding: $building-unit $building-unit_x1_5;
  }

  &-item {
    &-value {
      font-size: $font-size-h2;
      font-weight: $font-medium;
    }
    &-title {
      font-size: $font-size-caption;
      color: $pale;
    }
  }

  &-button {
    margin-left: $building-unit;
    border: none;
    background: transparent;
    cursor: pointer;
  }
}

p {
  margin: $building-unit_0_5;
}
</style>
