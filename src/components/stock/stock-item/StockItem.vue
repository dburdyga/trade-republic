<template>
  <div class="stock">
    <div class="stock-item">
      <p>{{ stock.isin }}</p>
    </div>
    <div class="stock-item">
      <p>{{ formattedPrice }}</p>
    </div>
    <div class="stock-item">
      <button>
        <SvgIcon name="delete" />
      </button>
    </div>
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

<style scoped lang="scss"></style>
