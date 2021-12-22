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
    <button class="stock-button">
      <SvgIcon name="delete" />
    </button>
  </div>

<!-- Remove-->
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
    <button class="stock-button">
      <SvgIcon name="delete" />
    </button>
  </div>
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
    <button class="stock-button">
      <SvgIcon name="delete" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Stock } from "@/lib/types/Stock";
import { convertNumberToCurrency } from "@/lib/formatters/number.formatter";

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
    &:first-child {
      margin-right: 60px;
    }
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
