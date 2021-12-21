<template>
  <div id="app">
    <h2>Streaming market data</h2>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Helpers
import { websocketService } from "@/api/websocket.service";


export default defineComponent({
  name: "App",
  created() {
    websocketService.init("ws://159.89.15.214:8080/");
  },
});
</script>

<style lang="scss"></style>
