<template>
  <div class="stock-timer">
    <p class="is-secondary-color">
      Next price update in {{timer}} seconds
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GET_UPDATE_INTERVAL } from "@/store/modules/ui/constants";
import store from "@/store";

export default defineComponent({
  computed: {
    timer(): number {
      return  store.getters[GET_UPDATE_INTERVAL];
    }
   }
})
</script>

<style scoped>

</style>
