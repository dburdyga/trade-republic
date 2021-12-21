<template>
  <div class="stock-list">
    <StockItem :key="stock.isin" v-for="stock in stocks" :stock="stock" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Stock } from "@/lib/types/Stock";
  import { GET_STOCKS } from "@/store/modules/stocks";
  import store from "@/store";
  import StockItem from "@/components/stock/stock-item/StockItem.vue";

  export default defineComponent({
    components: {
      StockItem,
    },
    computed: {
      stocks(): Stock[] {
        return store.getters[GET_STOCKS];
      },
    },
  });
</script>

<style scoped lang="scss">

</style>
