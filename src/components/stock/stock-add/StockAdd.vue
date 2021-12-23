<template>
  <form class="stock-add">
    <div class="stock-add-input">
      <Input
        id="isin"
        label="ISIN"
        placeholder="ISIN"
        :isValid="isISINValid"
        v-model:modelValue="isin"
      />
      <ErrorMessage :class="{ 'is-hidden': !stockWasAlreadyAdded }">
        Stock was already subscribed
      </ErrorMessage>
      <ErrorMessage :class="{ 'is-hidden': isISINValid }">
        Only Numbers or characters. Input length is 12.
      </ErrorMessage>
    </div>
    <Button
      :disabled="!isISINValid"
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

const validISINRegexp = /^[a-zA-Z0-9_]*$/;
const MAX_ISIN_LENGTH = 12;

export default defineComponent({
  data() {
    return {
      isin: "",
      isTouched: false,
    };
  },
  computed: {
    stocks(): Stock[] {
      return store.getters[GET_STOCKS];
    },
    stockWasAlreadyAdded(): boolean {
      return (
        this.isin.length === MAX_ISIN_LENGTH &&
        this.stocks.findIndex(({ isin }) => isin === this.isin) > -1
      );
    },
    isISINValid(): boolean {
      if (this.isin.length === 0 && !this.isTouched) {
        return true;
      }

      return (
        this.isin.length === MAX_ISIN_LENGTH && validISINRegexp.test(this.isin)
      );
    },
  },
  methods: {
    subscribeStock() {
      if (this.isISINValid) {
        store.dispatch(SUBSCRIBE_STOCK, this.isin);
        this.isin = "";
        this.isTouched = false;
      }
    },
  },
  watch: {
    isin(newValue) {
      if (!this.isTouched && newValue !== "") {
        this.isTouched = true;
      }
      this.isin = newValue.toUpperCase();
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
