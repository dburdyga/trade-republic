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
    <Button @click="unsubscribeStock">
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
    }
  }
});
</script>

<style scoped lang="scss">
.stock {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &-container {
    display: flex;
    align-items: center;
    border: 1px solid $light-grey;
    border-radius: 15px;
    padding: 8px 12px 8px 12px;
  }

  &-item {
    &-value {
      font-size: 18px;
      font-weight: $font-medium;
    }
    &-title {
      font-size: 12px;
      color: $grey;
    }
  }

  &-button {
    margin-left: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
}

p {
  margin: 5px;
}
</style>
