<template>
  <div class="home">
    <h1 class="home-header">Streaming market data</h1>
    <div class="home-content">
      <div class="home-section is-big">
        <Button class="is-active home-button-responsive" @click="isFormOpen = true">
          Subscribe new stock
        </Button>
        <StockList />
      </div>
      <div class="home-section home-form" :class="{ 'is-opened': isFormOpen}">
        <div class="home-form-close">
          <Button class="is-small" @click="isFormOpen = false">
            <SvgIcon name="close" />
          </Button>
        </div>
        <StockAdd />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StockList from "@/components/stock/stock-list/StockList.vue";
import StockAdd from "@/components/stock/stock-add/StockAdd.vue";
import Button from "@/components/common/button/Button.vue";

export default defineComponent({
  name: "Home",
  components: { Button, StockAdd, StockList },
  data() {
    return {
      isFormOpen: false,
    }
  }
});
</script>
<style lang="scss">
.home {
  min-height: 100vh;

  &-header {
    padding: 0 $building-unit-x4;

    @media ($mobile) {
      font-size: $font-size-h2;
      padding: 0 $building-unit;
    }
  }

  &-content {
    display: flex;
    margin-top: $building-unit_x2;
    height: 100vh;

    @media ($tablet) {
      flex-direction: column;
      margin-bottom: $building-unit_x4;
    }
  }

  &-section {
    flex: 1;
    padding: 0 $building-unit-x4;
    position: relative;

    @media ($mobile) {
      flex: 0;
      padding: 0 $building-unit;
    }

    &.is-big {
      flex: 2;

      @media ($tablet) {
        flex: 1;
      }

      @media ($mobile) {
        flex: 0;
      }
    }
  }

  &-button-responsive {
    margin-bottom: $building-unit_x2;
  }

  &-form {
    border-left: 1px dashed $pale-light;
    transition: $default-transition;

    @media ($tablet) {
      border-left: none;
      padding: $building-unit_x4 $building-unit_x4;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: $white;
      position: absolute;
      width: 100%;
      transform: translateX(-1000px);

      &.is-opened {
        transform: translateX(0);
      }
    }

    &-close {
      justify-content: flex-end;
      display: none;

      @media ($tablet) {
        display: flex;
      }
    }
  }
}
</style>
