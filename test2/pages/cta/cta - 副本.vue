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

    <!-- 显示接收到的信息 -->
    <view class="info-container">
      <text class="info-text">用户名: {{ username }}</text>
      <text class="info-text">性别: {{ gender }}</text>
      <text class="info-text">问题列表:</text>
      <view v-for="(problem, index) in problems" :key="index">
        <text class="info-text">- {{ problem }}</text>
      </view>
      <text class="info-text">答案列表:</text>
      <view v-for="(answer, index) in answers" :key="index">
        <text class="info-text">- {{ answer }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: true, // 用于控制加载状态
      username: '', // 存储传递过来的用户名
      gender: '', // 存储传递过来的性别
      problems: [], // 存储传递过来的问题列表
      answers: [] // 存储传递过来的答案列表
    };
  },
  mounted() {
    // 页面加载后10秒跳转到结果页面
    setTimeout(() => {
      this.loading = false;

      uni.redirectTo({
        url: '/pages/result/result', // 跳转地址
        success: () => {
          console.log('跳转成功');
        }
      });
    }, 500); // 计时器设置为10秒
  },
  onLoad(options) {
    // 从上一个页面接收数据
    if (options.username) {
      this.username = options.username;
    }
    if (options.gender) {
      this.gender = options.gender;
    }
    if (options.problems) {
      this.problems = options.problems.split(',');
    }
    if (options.answers) {
      this.answers = options.answers.split(',');
    }

    // 数据接收到后立即发送给后端
    this.sendDataToBackend();
  },
  methods: {
    sendDataToBackend() {
      // 使用uni.request方法发送POST请求
      uni.request({
        url: 'http://localhost:8000/submit-info/', // FastAPI后端的URL
        method: 'POST',
        header: {
          'content-type': 'application/json' // 设置请求头
        },
        data: {
          username: this.username,
          gender: this.gender,
          problems: this.problems,
          answers: this.answers
        },
        success: (res) => {
          console.log('数据发送成功', res.data);
        },
        fail: (err) => {
          console.error('数据发送失败', err);
        }
      });
    }
  }
};
</script>

<style scoped>
.loading-container {
  position: relative; /* 使子元素可以使用绝对定位 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  padding: 20px; /* 增加内边距 */
  box-sizing: border-box;
}

.illustration {
  margin-bottom: 20px; /* 插图与文本之间的距离 */
}

.illustration-image {
  width: 200px; /* 设置插图的宽度 */
  height: auto; /* 自动调整高度以保持比例 */
}

.loading-text {
  font-size: 18px;
  color: #333;
  text-align: center; /* 居中对齐文本 */
  margin-bottom: 20px; /* 文本与信息之间的距离 */
}

.info-container {
  width: 100%; /* 宽度设置为100%以便适应容器 */
  text-align: left; /* 信息左对齐 */
}

.info-text {
  font-size: 16px;
  color: #555;
  margin: 5px 0; /* 每条信息的上下外边距 */
}
</style>
