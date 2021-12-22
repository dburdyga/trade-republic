<template>
  <div id="app"></div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Helpers
import { init as initWebsocketConnection } from "@/api/websocket.service";

export default defineComponent({
  name: "App",
  created() {
    initWebsocketConnection("ws://159.89.15.214:8080/");
  },
});
</script>

<style lang="scss"></style>
