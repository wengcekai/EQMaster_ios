<template>
  <view class="loading-container">
    <!-- 插图 -->
    <view class="illustration">
      <image class="illustration-image" src="/static/headshot.png" mode="aspectFit"></image>
    </view>

    <!-- 加载文本 -->
    <view class="loading-text">
      <text style="font-weight: bold; display: block;">接下来，</text>
      <text style="font-weight: bold; display: block;">一起来看看你的职场人格类型吧！</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: true // 用于控制加载状态，可以在实际应用中动态控制
    };
  },
  mounted() {
    // 模拟数据加载完成
    setTimeout(() => {
      this.loading = false;
      uni.redirectTo({
        url: '/pages/result/result' // 跳转地址
      });
    }, 300); // 计时器设置为3秒
  }
};
</script>

<style scoped>
.loading-container {
  position: relative; /* 使子元素可以使用绝对定位 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
}

.illustration {
  position: absolute; /* 绝对定位插图 */
  top: 20%; /* 调整插图的位置 */
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
}

.illustration-image {
  width: 200px; /* 设置插图的宽度 */
  height: auto; /* 自动调整高度以保持比例 */
}

.loading-text {
  position: absolute; /* 绝对定位文本 */
  bottom: 20%; /* 调整文本的位置 */
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
  font-size: 18px;
  color: #333;
  text-align: center; /* 居中对齐文本 */
}
</style>
