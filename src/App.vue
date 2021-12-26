<template>
  <div id="app" class="app">
    <Message />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { init as initWebsocketConnection } from "@/api/websocket.service";
import Message from "@/components/root/message/Message.vue";

export default defineComponent({
  name: "App",
  components: { Message },
  created() {
    initWebsocketConnection("ws://159.89.15.214:8080/");
  },
});
</script>

<style lang="scss"></style>
