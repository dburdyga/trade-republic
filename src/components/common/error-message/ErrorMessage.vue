<template>
  <p class="error-message">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.error-message {
  color: $red;
  padding: $building-unit_0_5 0;

  &.is-hidden {
    display: none;
  }
}
</style>
