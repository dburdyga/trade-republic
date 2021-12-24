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
      <div class="stock-item">
        <p class="stock-item-title">Bid</p>
        <p class="stock-item-value is-secondary-color">{{ formattedBid }}</p>
      </div>
      <div class="stock-item">
        <p class="stock-item-title">Ask</p>
        <p class="stock-item-value is-secondary-color">{{ formattedAsk }}</p>
      </div>
      <div>
        <Button class="stock-button" @click="unsubscribeStock">
          <SvgIcon name="delete" />
        </Button>
      </div>
    </div>
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
    formattedAsk(): string {
      return convertNumberToCurrency(this.stock.ask);
    },
    formattedBid(): string {
      return convertNumberToCurrency(this.stock.bid);
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

  &:not(:last-child) {
    margin-bottom: $building-unit_x2;
  }

  &-container {
    display: flex;
    align-items: center;
    border: 1px solid $pale-light;
    border-radius: $border-radius;
    padding: $building-unit $building-unit_x1_5;
    width: 100%;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: start;
    }
  }

  &-item {
    flex: 1;
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

    @media screen and (max-width: 600px) {
      margin-left: 0;
    }
  }
}

p {
  margin: $building-unit_0_5;
}
</style>
