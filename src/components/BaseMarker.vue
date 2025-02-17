<template>
  <Popover :title="title" trigger="click">
    <div class="base-marker">{{ name }}</div>
    <template #content>
      <div style="width: 200px; word-break: break-all">{{ desc }}</div>
    </template>
  </Popover>
</template>
<script setup lang="ts">
import { Popover } from '@arco-design/web-vue'
interface PropsType {
  name: string
  desc: string
  title: string
}
const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.base-marker {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 12px;
  color: #fff;
  pointer-events: all;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 50%);
  border: 2px solid #adb0b1;
  border-radius: 50%;
}
</style>
