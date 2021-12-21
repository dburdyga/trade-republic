<template>
  <div id="app">
    <h2>Streaming market data</h2>
    <IsinInput />
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>ISIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in stocks" :key="stock.isin">
            <td>{{ stock.isin }}</td>
            <td>{{ stock.price }}</td>
          </tr>
        </tbody>
      </table>
      <h1>Make your money
        work for you</h1>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Helpers
import { websocketService } from "@/api/websocket.service";
import { Stock } from "@/lib/types/Stock";

// Store
import store from "@/store";
import { GET_STOCKS } from "@/store/modules/stocks";

// Components
import IsinInput from "@/components/IsinInput.vue";

export default defineComponent({
  name: "App",
  components: {
    IsinInput,
  },
  created() {
    websocketService.init("ws://159.89.15.214:8080/");
  },
  computed: {
    stocks(): Stock[] {
      return store.getters[GET_STOCKS];
    },
  },
});
</script>

<style lang="scss">


</style>
