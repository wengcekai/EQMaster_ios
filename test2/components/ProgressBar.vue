<template>
  <view class="progress-bar" :class="{ active: isActive }"></view>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false, // 默认是非active状态
    },
  },
}
</script>

<style scoped>
.progress-bar {
  width: 90%; /* 这里你可以根据需要调整宽度 */
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5); /* 默认灰色背景 */
  border-radius: 20px;
}

.active {
  background-color: rgba(255, 255, 255, 1); /* active状态为白色背景 */
}
</style>