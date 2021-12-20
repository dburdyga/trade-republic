<template>
  <div id="app">
    <div v-for="stock in stocks" :key="stock.isin">
      <h2>{{ stock.isin }}</h2>
      <p>{{stock.price}}</p>
    </div>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { websocketService } from "@/api/websocket.service";
import { Stock } from "@/lib/types/Stock";
import store from "@/store";
import { GET_STOCKS } from "@/store/modules/stocks";

export default defineComponent({
  name: "Home",
  created() {
    websocketService.init('ws://159.89.15.214:8080/');
  },
  computed: {
    stocks(): Stock[] {
      return store.getters[GET_STOCKS];
    }
  }
});

</script>
<style lang="scss">
#app {
  font-family: DINNextLTPro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.5;
  letter-spacing: unset;
  font-weight: 500;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
