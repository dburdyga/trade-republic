<template>
  <form class="stock-add">
    <Select id="select_isin" label="Select ISIN" placeholder="Select ISIN" :items="selectItems" v-model:modelValue="isin" />
    <div class="stock-add-input">
      <Input
        id="isin"
        label="New ISIN"
        placeholder="Input new ISIN"
        :isValid="!isInvalid"
        v-model:modelValue="isin"
      />
      <ErrorMessage :class="{ 'is-hidden': !stockWasAlreadyAdded }">
        Stock was already subscribed
      </ErrorMessage>
      <ErrorMessage :class="{ 'is-hidden': !isInvalid }">
        Only Numbers or characters. Input length is 12.
      </ErrorMessage>
    </div>
    <Button
      :disabled="buttonDisabled"
      class="is-active stock-add-button"
      @click="subscribeStock"
      >Subscribe</Button
    >
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { GET_STOCKS, SUBSCRIBE_STOCK } from "@/store/modules/stocks/constants";
import { Stock } from "@/lib/types/models/Stock";
import { SelectItem } from "@/lib/types/ui/SelectItem";

const validISINRegexp = /^[a-zA-Z0-9_]*$/;
const MAX_ISIN_LENGTH = 12;

export default defineComponent({
  data() {
    return {
      isin: "",
      isInvalid: false,
    };
  },
  computed: {
    stocks(): Stock[] {
      return store.getters[GET_STOCKS];
    },
    selectItems(): SelectItem[] {
      return [{ value: 'DE000BASF111', label: 'DE000BASF111'}, { value: 'BMG9156K1018', label: 'BMG9156K1018'}]
    },
    stockWasAlreadyAdded(): boolean {
      return (
        this.isin.length === MAX_ISIN_LENGTH &&
        this.stocks.findIndex(({ isin }) => isin === this.isin) > -1
      );
    },
    buttonDisabled(): boolean {
      return this.stockWasAlreadyAdded || !this.isISINValid(this.isin);
    }
  },
  methods: {
    subscribeStock() {
      if (this.isISINValid(this.isin)) {
        store.dispatch(SUBSCRIBE_STOCK, this.isin);
        this.isin = "";
        this.isInvalid = false;
      }
    },
    isISINValid(isin: string): boolean {
      return (
        isin.length === MAX_ISIN_LENGTH && validISINRegexp.test(isin)
      );
    }
  },
  watch: {
    isin(newValue) {
      this.isin = newValue.toUpperCase();

      if(newValue.length === 0) {
        this.isInvalid = false;
        return;
      }
      this.isInvalid = !this.isISINValid(newValue);
    },
  },
});
</script>

<style lang="scss" scoped>
.stock-add {
  display: flex;
  flex-direction: column;
  width: 60%;

  &-button {
    max-width: 200px;
  }

  &-input {
    margin-bottom: $building-unit-x2;
    width: 100%;
  }
}
</style>
