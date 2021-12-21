<template>
  <div id="app">
    <h2>Streaming market data</h2>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ISIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in stocks" :key="stock.isin">
            <th scope="row">1</th>
            <td>{{ stock.isin }}</td>
            <td>{{ stock.price }}</td>
          </tr>
        </tbody>
      </table>
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
  name: "App",
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
#app {
  font-family: DINNextLTPro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.5;
  letter-spacing: unset;
  font-weight: 500;
}
html,
body {
  height: 100%;
}

body {
  margin: 0;
  font-family: DINNextLTPro, sans-serif;
  font-weight: 100;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

td,
th {
  padding: 15px;
  color: black;
}

th {
  text-align: left;
}

thead {
  background-color: #36df77;
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
