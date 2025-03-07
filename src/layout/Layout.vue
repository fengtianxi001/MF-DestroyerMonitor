<template>
  <div class="layout">
    <div class="layout-header">
      <div style="display: flex">
        <LayoutBrand />
      </div>
      <div style="display: flex">
        <LayoutActions />
      </div>
    </div>
    <div class="layout-body">
      <slot />
    </div>
  </div>
</template>
<script setup lang="tsx">
import LayoutBrand from './LayoutBrand.vue'
import LayoutActions from './LayoutActions.vue'
</script>
<style lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  font-family: SarasaMonoSC;
  .layout-header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 20px;
    background-color: var(--color-menu-light-bg);
    border-bottom: 1px solid var(--color-border);
  }
  .layout-body {
    box-sizing: border-box;
    height: calc(100% - 50px);

    // padding: 20px;
    overflow-y: auto;
    background-color: var(--color-neutral-2);
    background-size: auto 100%;
  }
}
.slide-enter-active {
  animation: slideInLeft 0.4s;
}
</style>
