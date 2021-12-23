<template>
  <div
    v-if="message.text"
    class="message"
    :class="{ [message.type]: true, 'is-visible': hasMessage }"
  >
    <div class="message-content">
      <p>{{ message.text }}</p>
      <Button class="button-close" @click="clearMessage">
        <SvgIcon name="close" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { CLEAR_MESSAGE, GET_MESSAGE } from "@/store/modules/ui/constants";
import { Message } from "@/lib/types/ui/Message";
import Button from "@/components/common/button/Button.vue";
import SvgIcon from "@/components/common/svg-icon/SvgIcon.vue";
export default defineComponent({
  components: { SvgIcon, Button },
  computed: {
    message(): Message {
      return store.getters[GET_MESSAGE];
    },
    hasMessage(): boolean {
      return this.message.text !== "";
    },
  },
  methods: {
    clearMessage() {
      store.commit(CLEAR_MESSAGE);
    },
  },
});
</script>

<style lang="scss" scoped>
.message {
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 2;
  width: 100%;
  font-size: $font-size-regular;

  &-content {
    display: flex;
    align-items: center;
    margin-left: $building-unit_x4;
  }

  &.error {
    background-color: $red;
  }

  &.success {
    background-color: $green;
  }
}

.button-close {
  margin-left: $building-unit_x2;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
