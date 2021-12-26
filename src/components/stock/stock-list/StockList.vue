<template>
  <div class="stock-list">
    <div v-if="stocks.length" class="stock-list-timer stock-list-menu">
      <StockTimer />
      <div class="stock-list-sort" v-if="showSorting">
        <label class="is-caption">Sort by:</label>
        <Select id="select-sort" placeholder="Select sorting key" :items="sortKeys" v-model="sortingKey" />
        <Button class="is-small" @click="isAsc = !isAsc">
          <SvgIcon name="arrow" :class="{ 'is-reversed' : !isAsc}"/>
        </Button>
      </div>
    </div>
    <template v-if="sortedArray.length">
      <StockItem :key="stock.isin" v-for="stock in sortedArray" :stock="stock" />
    </template>
    <template v-else> Stock list is empty. Please add stock. </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Stock } from "@/lib/types/models/Stock";
import StockTimer from "@/components/stock/stock-timer/StockTimer.vue";
import StockItem from "@/components/stock/stock-item/StockItem.vue";
import { GET_STOCKS } from "@/store/modules/stocks/constants";
import Select from "@/components/common/select/Select.vue";
import { Keys, stockComparator } from "@/lib/utils/sorting.util";
import store from "@/store";
import { SelectItem } from "@/lib/types/ui/SelectItem";

export default defineComponent({
  components: {
    Select,
    StockItem,
    StockTimer,
  },
  data() {
    return {
      sortingKey: "isin" as Keys,
      isAsc: true,
    }
  },
  computed: {
    sortKeys(): SelectItem[] {
      const keys = this.stocks.length > 0 ? Object.keys(this.stocks[0]) : [];
      return keys.map((key) => ({label: key, value: key}));
    },
    stocks(): Stock[] {
      return <Stock[]>store.getters[GET_STOCKS];
    },
    sortedArray(): Stock[] {
      return this.stocks.sort((a, b) => stockComparator(a, b, this.sortingKey, this.isAsc));
    },
    showSorting(): boolean {
      return  this.stocks.length > 1;
    },
  },
});
</script>

<style scoped lang="scss">
.stock-list {
  &-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media ($mobile) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  &-sort {
    display: flex;
    gap: $building-unit;
    align-items: center;

    @media ($mobile) {
      label {
        display: none;
      }
    }
  }

  &-timer {
    margin-bottom: $building-unit-x2;

    @media ($mobile) {
      display: none;
    }
  }
}

.is-reversed {
  transition: $default-transition;
  transform: rotate(180deg);
}
</style>
