<template>
  <div class="base-loading" v-show="loading">
    <img src="@/assets/images/loading.gif" alt="" />
    <div>场景正在加载中...</div>
  </div>
</template>
<script setup lang="ts">
interface PropsType {
  loading: boolean
}
const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.base-loading {
  position: absolute;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-weight: bold;
  color: #5ba0ae;
  background: #000;
  opacity: 0.8;
}
</style>
